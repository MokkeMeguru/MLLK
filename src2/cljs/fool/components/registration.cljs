(ns fool.components.registration
  (:require [reagent.core :refer [atom]]
            [fool.components.common :as c]
            [ajax.core :as ajax]
            [reagent.session :as session]
            [fool.validation :refer [user-registration-error]]))

(defn cljs-register! [fields error]
  (reset! error (user-registration-error @fields))
  (when-not @error
    (ajax/POST "/register"
               {:params @fields
                :handler #(do
                            (session/put! :identity (:name @fields))
                            (session/remove! :modal)
                            (reset! fields {}))
                :error-handler
                #(reset! error (get-in % [:response :message]))})))

(defn registration-form []
  (let [fields (atom {})
        error (atom nil)]
    (fn []
      [c/modal
       [:div "fool Registration"]
       [:div
        [:div.well.well-sm
         [:strong "* required fields"]]
        [c/text-input "name" :name "enter a user name" fields]
        (when-let [error (first (:name @error))]
          [:div.alert.alert-danger error])
        [c/password-input "password" :pass "enter a password" fields]
        (when-let [error (first (:pass @error))]
          [:div.alert.alert-danger error])
        [c/password-input "password" :pass-confirm "re-enter the password" fields]
        (when-let [error (:server-error @error)]
          [:div.alert.alert-danger error])]
       [:div
        [:button.btn.btn-primary
         {:on-click #(cljs-register! fields error)}
         "Register"]
        [:button.btn.btn-danger
         {:on-click #(session/remove! :modal)}
         "Cancel"]]])))

(defn registration-button []
  [:a.btn.nav-link.active
   {:on-click #(session/put! :modal registration-form)}
   "register"])
