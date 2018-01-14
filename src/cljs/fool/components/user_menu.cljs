(ns fool.components.user-menu
  (:require [reagent.core :refer [atom]]
            [reagent.session :as session]
            [goog.crypt.base64 :as b64]
            [clojure.string :as string]
            [ajax.core :as ajax]
            [fool.components.common :as c]
            [fool.validation :as v]))

(defn encode-key [key]
  (->> key
       (b64/encodeString)
       (str "Basic ")))

(defn reset-pass! [fields error]
  (let [{:keys [pass newpass newpass-confirm]} @fields]
    (if-let [message (v/update-password-error @fields)]
      (reset! error message)
      (do
        (ajax/POST "/update-password"
                   {:headers
                    {"Authorization"
                     (encode-key (str (string/trim (session/get :identity)) ":" pass ":" newpass))}
                    :handler #(do (reset! fields nil)
                                  (reset! error {:update-pass "Success"}))
                    :error-handler
                    #(do (reset! error
                                 {:update-pass (get-in % [:response :message])}))})))))


(defn set-api-key! [api-fields error]
  (reset! error nil)
  (if-let [api-key (:api-key @api-fields)]
    (ajax/POST "/apikey-test"
               {:headers
                {"Api-key"
                 (encode-key (str (string/trim (session/get :identity))
                                  ":" (string/trim api-key)))}
                :handler #(do (reset! api-fields nil)
                              (reset! error {:api "Success"}))
                :error-handler
                #(do (reset! error
                             {:api (get-in % [:response :message])}))})
    (reset! error {:api "Please input your API key"})))

(defn user-form [id]
  (let [fields (atom {})
        api-fields (atom {})
        error (atom nil)]
    (fn []
      [c/modal
       [:div id " settings"]
       [:div
        [:div.well.well-sm
         [:strong "Reset Password"]]
        [c/ni-password-input
         "previous password" :pass "enter a previous user password" fields]
        (when-let [error- (:pass @error)]
          [:div.alert.alert-danger error-])
        [c/ni-password-input
         "new password" :newpass "enter a new user password" fields]
        (when-let [error- (:newpass @error)]
          [:div.alert.alert-danger error-])
        [c/ni-password-input
         "new password" :newpass-confirm "enter a new user password" fields]
        (if (= "Success"  (:update-pass @error))
          [:div.alert.alert-success "Success"]
          (when-let [error- (:update-pass @error)]
            [:div.alert.alert-danger error-]))
        [:div.well.well-sm
         [:strong "Set API key"]]
        [c/ni-text-input
         "Quandl api-key" :api-key "Please get api-key form Quandl" api-fields]
        (if (= "Success"  (:api @error))
          [:div.alert.alert-success "Success"]
          (when-let [error- (:api @error)]
            [:div.alert.alert-danger error-]))]
       [:div.btn-toolbar
        [:div.btn-group
         [:button.btn.btn-primary.mr-1
          {:on-click #(reset-pass! fields error)}
          "New Password"]
         [:button.btn.btn-primary.mr-1
          {:on-click #(set-api-key! api-fields error)}
          "Set API-key"]
         [:button.btn.btn-danger
          {:on-click #(session/remove! :modal)}
          "Cancel"]]]])))

(defn user-form-button [id]
  [:a.dropdown-item.btn
   {:on-click #(session/put! :modal (user-form id))}
   [:i.fa.fa-user] " " id])
