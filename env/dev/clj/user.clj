(ns user
  (:require [luminus-migrations.core :as migrations]
            [fool.config :refer [env]]
            [mount.core :as mount]
            [fool.figwheel :refer [start-fw stop-fw cljs]]
            [fool.core :refer [start-app]]))

(defn start []
  (mount/start-without #'fool.core/repl-server))

(defn stop []
  (mount/stop-except #'fool.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


