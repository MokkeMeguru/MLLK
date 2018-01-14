(ns fool.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [fool.layout :refer [error-page]]
            [fool.routes.home :refer [home-routes]]
            [fool.routes.services :refer [service-routes restricted-service-routes]]
            [compojure.route :as route]
            [fool.env :refer [defaults]]
            [mount.core :as mount]
            [fool.middleware :as middleware]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'home-routes
          (wrap-routes middleware/wrap-csrf)
          (wrap-routes middleware/wrap-formats))
      #'service-routes
      (wrap-routes #'restricted-service-routes middleware/wrap-auth)
      (route/not-found
        (:body
          (error-page {:status 404
                       :title "page not found"}))))))
