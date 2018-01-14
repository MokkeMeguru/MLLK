(ns fool.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [fool.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[fool started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[fool has shut down successfully]=-"))
   :middleware wrap-dev})
