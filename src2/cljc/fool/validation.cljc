(ns fool.validation
  (:require [struct.core :as st]
            [bouncer.core :as b]
            [bouncer.validators :as v]))

(defn user-registration-error
  "require maps which contain name, pass, pass-confirm \n
  3 <= name <= 30
  5 <= pass <= 500
  pass == pass-confirm"
  [{:keys [pass-confirm] :as params}]
  (first
   (b/validate params
               :name [[v/required :message "user-name must be present"]
                      [v/min-count 3 :message "user-name must contain at least 3"]
                      [v/max-count 30 :message "user-name must contain at least 30"]]
               :pass [[v/required :message "password must be present"]
                      [v/max-count 500 :message "password must contaion at most 500"]
                      [v/min-count 5 :message "password must contain at least 5"]
                      [= pass-confirm :message "re-entered password does not match"]])))

(defn login-error
  "require maps which contain name, pass, pass-confirm \n
  3 <= name <= 30
  5 <= pass <= 500"
  [params]
  (first
   (b/validate params
               :name [[v/required :message "user-name must be present"]
                      [v/min-count 3 :message "user-name must contain at least 3"]
                      [v/max-count 30 :message "user-name must contain at least 30"]]
               :pass [[v/required :message "password must be present"]
                      [v/max-count 500 :message "password must contaion at most 500"]
                      [v/min-count 5 :message "password must contain at least 5"]])))

(defn update-password-error
  "require maps which contain pass, newpass, newpass-confirm \n
  5 <= pass <= 500
  5 <= newpass <= 500
  newpass == newpass-confirm"
  [{:keys [newpass-confirm] :as params}]
  (first
   (b/validate params
               :pass [[v/required :message "password must be present"]
                      [v/max-count 500 :message "password must contaion at most 500"]
                      [v/min-count 5 :message "password must contain at least 5"]]
               :newpass [[v/required :message "password must be present"]
                         [v/max-count 500 :message "password must contaion at most 500"]
                         [v/min-count 5 :message "password must contain at least 5"]
                         [= newpass-confirm :message "re-entered password does not match"]])))
