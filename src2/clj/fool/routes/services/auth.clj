(ns fool.routes.services.auth
  (:require
   [fool.db.core :as db]
   [ring.util.http-response :as response]
   [buddy.hashers :as hashers]
   [fool.validation :refer [user-registration-error]]
   [clojure.tools.logging :as log]))

;; knowledge ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (= (new java.util.Date)
;;    (clj-time.coerce/to-sql-time (clj-time.core/now)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; registration ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn handle-resistration-error [e]
  (if (-> e
          (Throwable->map)
          (:cause)
          (.startsWith "ERROR: duplicate key value"))
    (response/precondition-failed
     {:result :error
      :message "user with the selected Name already exists"})
    (do
      (log/error e)
      (response/internal-server-error
       {:result :error
        :message "server error occured while adding the user"}))))

(defn register! [{:keys [session]} user]
  (if-let [error (user-registration-error user)]
    (response/precondition-failed {:result :error
                                   :message error})
    (try
      (db/create-user!
       (-> user
           (dissoc :pass-confirm)
           (update :pass hashers/encrypt)
           (assoc :last_login (clj-time.coerce/to-sql-time (clj-time.core/now)))))
      (-> {:result :ok}
          (response/ok)
          (assoc :session (assoc session :identitiy (:name user))))
      (catch Exception e
        (handle-resistration-error e)))))

;; (register! {:session {}}
;;            {:name "admin" :pass "administrator" :pass-confirm "administrator"})
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; login ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn- decode-auth [encoded]
  (let [auth (second (.split encoded " "))]
    (-> (.decode (java.util.Base64/getDecoder) auth)
        (String. (java.nio.charset.Charset/forName "UTF-8"))
        (.split ":"))))

(defn authenticate [[name pass]]
  (when-let [user (db/get-user {:name name})]
    (when (hashers/check pass (:pass user))
      name)))

(defn login!
  [{:keys [session]} auth]
  (if-let [id (authenticate (decode-auth auth))]
    (-> {:result :ok}
        (response/ok)
        (assoc :session (assoc session :identity id)))
    (response/unauthorized {:result :unauthorized
                            :message "login failure"})))


;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (login! {:session nil} (str "Basic "
;;                             (.encodeToString
;;                              (java.util.Base64/getEncoder)
;;                              (.getBytes "0000:00000"))))
;; (str "Basic "
;;      (.encodeToString
;;       (java.util.Base64/getEncoder)
;;       (.getBytes "0000:00000")))
;; "Basic MDAwMDowMDAwMA=="
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; logout ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn logout! []
  (-> {:result :ok}
      (response/ok)
      (assoc :session nil)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; update password ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn update-password! [auth]
  (let [[name prevpass newpass] (decode-auth auth)]
    (if (authenticate [name prevpass])
      (do (db/update-password! {:name name :newpass (hashers/encrypt newpass)})
          (-> {:result :ok}
              (response/ok)))
      (response/unauthorized {:result :unauthorized
                              :message "invalid password"}))))
;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (update-password! "Basic ZWxlY3Q6ZWxlY3QwMDA6ZWxlY3QwMDA=")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;




