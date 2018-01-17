(ns fool.routes.services.tsdata
  (:require [clj-http.client :as client]
            [com.chartbeat.opentsdb.core :as tsdb]
            [ring.util.http-response :as response]
            [fool.routes.services.api :as api]
            [clojure.tools.logging :as log]
            [clojure.data.json :as json]))

;; TODO ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Get data more efficiently
;; create opentsdb's api 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; knowledge ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
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
(def uri "http://localhost:4242/api/query")
(def uri2 "http://localhost:4242/api/version")
;; Notice! YOU SHOULD DO HERE COMMAND and check connections
(defn connection-check! []
  (try
    (client/post uri2)
    (catch Exception e nil)))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (connection-check!)
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

;; see also ... https://github.com/chartbeat-labs/cljbeat-opentsdb
(defn send-element!
  [metricv [tagvv data]]
  (try
    (let [tagv (name tagvv)
          client (tsdb/open-connection! hostname port)]
      ;; (Thread/sleep 100)
      (tsdb/send-metrics client
       (mapv (fn [map]
               (let [[time val] (first map)]
                 [metricv (clj-time.coerce/to-long time) val {:type tagv}]))
             data))
      (tsdb/close-connection! client))
    (catch Exception e (do  (log/error e) (str e)))))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (send-element! "NIKKEI/INDEX" (first api/res))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn send-data!
  [^String api-key
   {:keys [name start_date end_date] :as param-map}]
  (if-let [raw-data (api/get-map-data api-key param-map)]
      (map #(send-element! name %) raw-data)
    nil))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (send-data! "8zvcussLPAzz7xbdisQb" {:name "NIKKEI/INDEX"
;;                                     :start_date (clj-time.core/date-time 2016 8 1)
;;                                     :end_date (clj-time.core/date-time 2018 1 6)})
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-tsdb
  "
  start ... clj-time or Long
  end   ... clj-time or Long
  "
  [^String metric
   ^String type-map
   start-
   end-
   & {:keys [downsample aggregator ms-resolution
             global-annotations show-query]
      :or {downsample "1d-avg"
           aggregator "none"
           ms-resolution false
           global-annotations true
           show-query true}}]
  (let [start (if (= (type start-) java.lang.Long)
                start- (clj-time.coerce/to-long start-))
        end (if (= (type end-) java.lang.Long)
                end- (clj-time.coerce/to-long end-))]
   (try
     (if (= "connection to OpenTSDB is refused" connection-check!)
       "connection to OpenTSDB is refused"
       (-> (client/post "http://localhost:4242/api/query"
                       {:content-type :json
                        :form-params
                        {"start" (clj-time.coerce/to-long start)
                         "end" (clj-time.coerce/to-long end)
                         "queries" [{"metric" metric
                                     "tags" type-map
                                     "aggregator" aggregator
                                     "downsample" downsample
                                     "msResolution" (str ms-resolution)
                                     "globalAnnotations" (str global-annotations)
                                     "showQuery" (str show-query)}]}})
          (get-in [:body])
          (json/read-str)
          (first)
          (get-in ["dps"])))
      (catch Exception e
        (-> (ex-data e)
            (:body)
            (json/read-str)
            (first)
            (second)
            (get-in ["message"])
            (clojure.string/split #":"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (let [start (clj-time.core/date-time 2017 1 1)
;;       end (clj-time.core/now)
;;       metric "NIKKEI/INDEX"
;;       type-map {"type" "close-price"}
;;       downsample "1d-avg"
;;       aggregator "sum"
;;       ms-resolution (str false)
;;       global-annotations (str true)
;;       show-query (str true)]
;;   (try
;;     (-> (client/post "http://localhost:4242/api/query"
;;                      {:content-type :json
;;                       :form-params
;;                       {"start" (clj-time.coerce/to-long start)
;;                        "end" (clj-time.coerce/to-long end)
;;                        "queries" [{"metric" metric
;;                                    "tags" type-map
;;                                    "aggregator" aggregator
;;                                    "downsample" downsample
;;                                    "msResolution" (str ms-resolution)
;;                                    "globalAnnotations" (str global-annotations)
;;                                    "showQuery" (str show-query)}]}})
;;         (get-in [:body])
;;         (json/read-str)
;;         (first)
;;         (get-in ["dps"]))
;;     (catch Exception e
;;       (-> (ex-data e)
;;           (:body)
;;           (json/read-str)
;;           (first)
;;           (second)
;;           (get-in ["message"])
;;           (clojure.string/split #":")))))


;; (get-tsdb "NIKKEI/INDEX" {"type" "open-price"}
;;           (clj-time.core/date-time 2017 1 1)
;;           (clj-time.core/now))
