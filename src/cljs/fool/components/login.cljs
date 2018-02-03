(ns fool.components.login
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [goog.crypt.base64 :as b64]
            [clojure.string :as string]
            [ajax.core :as ajax]
            [fool.components.common :as c]
            [fool.validation :as v]))

(defn encode-auth [user pass]
  (->> (str user ":" pass)
       (b64/encodeString)
       (str "Basic ")))

(def timeout-ms (* 1000 60 30))

(defn session-timer []
  (when (session/get :identity)
    (if (session/get :user-event)
      (do (session/remove! :user-event)
          (js/setTimeout #(session-timer) timeout-ms))
      (session/remove! :identity))))

(defn login! [fields error]
  (reset! error (v/login-error @fields))
  (when-not @error
    (let [{:keys [name pass]} @fields]
      (reset! error nil)
      (ajax/POST "/login"
                 {:headers
                  {"Authorization"
                   (encode-auth (string/trim name) pass)}
                  :handler #(do (session/put! :identity name)
                                (session/remove! :modal)
                                (js/setTimeout session-timer timeout-ms) 
                                (reset! fields nil))
                  :error-handler #(reset! error
                                          {:server-error (get-in % [:response :message])})}))))

(defn login-form []
  (let [fields (atom {})
        error (atom nil)]
    (fn []
      [c/modal
       [:div "MLLK Login"]
       [:div
        [:div.well.well-sm
         [:strong "* required fields"]]
        [c/text-input "name" :name "enter a pass user name" fields]
        (when-let [error- (:name @error)]
          [:div.alert.alert-danger error-])
        [c/password-input "password" :pass "enter a password" fields]
        (when-let [error- (:pass @error)]
          [:div.alert.alert-danger error-])
        (when-let [error- (:server-error @error)]
          [:div.alert.alert-danger error-])]
       [:div
        [:button.btn.btn-primary
         {:on-click #(login! fields error)}
         "Login"]
        [:button.btn.btn-danger
         {:on-click #(session/remove! :modal)}
         "Cancel"]]])))

(defn login-button []
  [:a.btn.nav-link.active
   {:on-click #(session/put! :modal login-form)}
   "Login"])
