(ns fool.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[fool started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[fool has shut down successfully]=-"))
   :middleware identity})
