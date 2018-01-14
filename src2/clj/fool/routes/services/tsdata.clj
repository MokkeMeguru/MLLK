(ns fool.routes.services.tsdata
  (:require [clj-http.client :as client]
            [com.chartbeat.opentsdb.core :as tsdb]
            [ring.util.http-response :as response]
            [fool.routes.services.api :as api]
            [clojure.tools.logging :as log]))

;; knowledge ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (clj-time.coerce/to-long (clj-time.core/now))
;; (let [client (tsdb/open-connection! "127.0.0.1" 4242)]
;;   (tsdb/with-timing client "test.clj-library-dnd" []
;;     (dotimes [_ 10]
;;       (tsdb/send-metric client "test.clj-library-dnd" (System/currentTimeMillis) 1337
;;                         [{:name "type" :value "ogre"} {:name "event" :value "ready"}])))
;;
;;   (tsdb/send-metrics client [["test.clj-library-dnd" (System/currentTimeMillis) 10003 {"type" "goblin"}]
;;                              ["test.clj-library-dnd" (System/currentTimeMillis) 9001 {"type" "demon"}]
;;                              ["test.clj-library-dnd" (System/currentTimeMillis) 1 {"type" "necromancer"}]])
;;   (tsdb/close-connection! client))
;; (tsdb/send-metrics-http "localhost" 4242 [{:metric "foo"
;;                                            :timestamp (System/currentTimeMillis)
;;                                            :value 1
;;                                            :tags {:host "localhost"
;;                                                   :group "test-group"}}
;;                                           {:metric "bar"
;;                                            :timestamp (System/currentTimeMillis)
;;                                            :value 2}])
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; variable ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def hostname "127.0.0.1")
(def port 4242)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; stab ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (defn send-element
;;   [metricv  [tagvv data]]
;;   (let [client (str hostname port)
;;         tagv (name tagvv)]
;;     (vec
;;                        (mapv (fn [map]
;;                                (let [[time val] (first map)]
;;                                  [metricv (clj-time.coerce/to-long time) val {:type tagv}]))
;;                              data))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn send-element!
  [metricv [tagvv data]]
  (try
    (let [tagv (name tagvv)
          ;;client (tsdb/open-connection! hostname port)
          ]
      
      (Thread/sleep 100)
      (str
      ;;        client
       (mapv (fn [map]
               (let [[time val] (first map)]
                 [metricv (clj-time.coerce/to-long time) val {:type tagv}]))
             data))
      ;;(tsdb/close-connection! client)
      )
    (catch Exception e (do  (log/error e) (str e)))))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(send-element! "NIKKEI/INDEX" (first api/res))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn send-data!
  [^String api-key
   {:keys [name start_date end_date] :as param-map}]
  (if-let [raw-data (api/get-map-data api-key param-map)]
      (map #(send-element! name %) raw-data)
    nil))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (send-data! "8zvcussLPAzz7xbdisQb" {:name "NIKKEI/INDEX"
;;                                     :start_date (clj-time.core/date-time 2017 12 1)
;;                                     :end_date (clj-time.core/date-time 2018 1 6)})
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

