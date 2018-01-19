(ns fool.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [compojure.api.meta :refer [restructure-param]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]
            [fool.routes.services.auth :as auth]
            [fool.routes.services.api :as api]
            [fool.routes.services.ml :as ml]))

;; ---------------------------------------------------------------------
(defn access-error [_ _]
  (unauthorized {:error "unauthorized"}))

(defn wrap-restricted [handler rule]
  (restrict handler {:handler  rule
                     :on-error access-error}))

(defmethod restructure-param :auth-rules
  [_ rule acc]
  (update-in acc [:middleware] conj [wrap-restricted rule]))

(defmethod restructure-param :current-user
  [_ binding acc]
  (update-in acc [:letks] into [binding `(:identity ~'+compojure-api-request+)]))
;; ----------------------------------------------------------------------

(s/defschema ArimaParameter
  {:id s/Str
   :data {:start s/Num
          :end s/Num
          :title String
          :type String}
   :diff s/Num
   (s/optional-key :adf) s/Num
   (s/optional-key :acf) s/Num
   (s/optional-key :pacf) s/Num
   (s/optional-key :arima) {:type String
                            :p s/Num
                            :q s/Num
                            :len s/Num}
   (s/optional-key :option) String})

(s/defschema ArimaResult
  {:result s/Keyword
   (s/optional-key :message) String
   (s/optional-key :run-result)
   {:data {:date [Double]
           :data [Double]}
    :diff [Double]
    (s/optional-key :adf) {:adf Double :reject? Boolean}
    (s/optional-key :acf) {:val [Double] :threshold Double}
    (s/optional-key :pacf) {:val [Double] :threshold Double}
    (s/optional-key :arima) {:upper [Double]
                             :lower [Double]
                             :p [Double]
                             :q [Double]
                             :n s/Num
                             :d s/Num
                             :aic Double}}})

(s/defschema UserRegistration
  {:name String
   :pass String
   :pass-confirm String})

(s/defschema Result
  {:result s/Keyword
   (s/optional-key :message) String})

(defapi restricted-service-routes
  {:swagger {:ui "/swagger-ui-private"
             :spec "/swagger-private.json"
             :data {:into {:version "1.0.0"
                           :title "fool API"
                           :description "Public Services"}}}}
  (POST "/apikey-test" req
        :return Result
        :header-params [api-key :- String]
        :summary "api-key test"
        (api/key-test! api-key))
  (POST "/update-password" req
        :return Result
        :header-params [authorization :- String]
        :summary "upsate-password"
        (auth/update-password! authorization)))

(defapi service-routes
  {:swagger {:ui "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version "1.0.0"
                           :title "fool private API"
                           :description "Privte Services"}}}}
  (POST "/register" req
        :return Result
        :body [user UserRegistration]
        :summary "register a new user"
        (auth/register! req user))
  (POST "/login" req
        :return Result
        :header-params [authorization :- String]
        :summary "login the user and create a session"
        (auth/login! req authorization))
  (POST "/logout" []
        :return Result
        :summary "logout the user and remove the session"
        (auth/logout!))
  (context "/ml" []
           :tags ["Machine Learning"]
           (POST "/arima" []
                :return ArimaResult
                :body [arimaparam ArimaParameter]
                :summary "machine learning : ARIMA"
                (fn [arimparam]
                  (let [res (ml/arima-parser arimparam)]
                    (if (string? res)
                      (-> {:result :error}
                          (update :message
                                  (str "Machine Learning Exception : " res))
                          (ring.util.http-response/bad-request))
                      (-> {:result :ok}
                          (assoc :run-result res)
                          (ring.util.http-response/ok))))))))

;; (defapi service-routes
;;   {:swagger {:ui "/swagger-ui"
;;              :spec "/swagger.json"
;;              :data {:info {:version "1.0.0"
;;                            :title "Sample API"
;;                            :description "Sample Services"}}}}
  
;;   (GET "/authenticated" []
;;        :auth-rules authenticated?
;;        :current-user user
;;        (ok {:user user}))
;;   (context "/api" []
;;     :tags ["thingie"]

;;     (GET "/plus" []
;;       :return       Long
;;       :query-params [x :- Long, {y :- Long 1}]
;;       :summary      "x+y with query-parameters. y defaults to 1."
;;       (ok (+ x y)))

;;     (POST "/minus" []
;;       :return      Long
;;       :body-params [x :- Long, y :- Long]
;;       :summary     "x-y with body-parameters."
;;       (ok (- x y)))

;;     (GET "/times/:x/:y" []
;;       :return      Long
;;       :path-params [x :- Long, y :- Long]
;;       :summary     "x*y with path-parameters"
;;       (ok (* x y)))

;;     (POST "/divide" []
;;       :return      Double
;;       :form-params [x :- Long, y :- Long]
;;       :summary     "x/y with form-parameters"
;;       (ok (/ x y)))

;;     (GET "/power" []
;;       :return      Long
;;       :header-params [x :- Long, y :- Long]
;;       :summary     "x^y with header-parameters"
;;       (ok (long (Math/pow x y))))))
