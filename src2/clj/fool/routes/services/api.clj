(ns fool.routes.services.api
  (:require [clj-quandl-api.core :as quandl]
            [clj-time.core :as t]
            [clj-time.coerce :as coerce]
            [ring.util.http-response :as response]
            [fool.db.core :as db]))

(defn- api-key-test
  "api-key test:
  true  ... success access
  false ... FALSE success"
  [api-key]
  (let [result (ref nil)]
    (dosync
     (quandl/set-api-key! api-key)
     (ref-set result
              (quandl/quandl "NIKKEI/INDEX" :rows 3 :collapse "weekly"))
     (quandl/set-api-key! nil)
     (not (nil? @result)))))

(defn- get-data
  "param-map {:name xxx :start_date xxx :end_date xxx}"
  [^String api-key
   {:keys [name start_date  end_date] :as param-map}]
  (let [result (ref nil)]
    (dosync
     (quandl/set-api-key! api-key)
     (ref-set result
              (quandl/quandl
               name
               :collapse "weekly"
               :start_date start_date
               :end_date end_date))
     (quandl/set-api-key! nil)
     (if-let [result @result] result nil))))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (def test (get-data nil {:name "NIKKEI/INDEX"
;;                  :start_date (t/date-time 2017 12 1)
;;                  :end_date (t/date-time 2017 12 31)}))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; api docs ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (defn- date-time? [d] (or (string? d) (instance? org.joda.time.DateTime d)))
;; (def ^:private allowed {:collapse     #{"none" "daily" "weekly" "monthly" "quarterly" "annual"}
;;                         :transform    #{"none" "rdiff" "diff" "cumul" "normalize"}
;;                         :order        #{"asc" "desc"}
;;                         :rows         integer?
;;                         :limit        integer?
;;                         :column_index integer?
;;                         :start_date   date-time?
;;                         :end_date     date-time?})
;; (defn- allowed? [[k v]] ((allowed k) v))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn- data->map [{:keys [date] :as data}]
  (let [key-list (remove (partial = :date) (keys data))]
    (reduce into {} (pmap (fn [key]
                            {key
                             (map (fn [k v] {k v}) date (key data))})
                          key-list))))

;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; (def x2 (quandl/quandl "WIKI/AAPL"  :rows 3 :collapse "weekly"))
;; (first (data->map x2))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-map-data
  "param-map {:name xxx :start_date xxx :end_date xxx}"
  [^String api-key
   {:keys [name start_date  end_date] :as param-map}]
  (if-let [raw-data (get-data api-key param-map)]
    (data->map raw-data)
    nil))


;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def res (get-map-data "8zvcussLPAzz7xbdisQb" {:name "NIKKEI/INDEX"
                            :start_date (t/date-time 2017 12 1)
                            :end_date (t/date-time 2017 12 31)}))
(first res)
;; (keys res)
;; (type res)
;;(name :open)
;;(second (first (first ((first (keys res)) res))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; key-test! ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn decode-auth [encoded]
  (let [auth (second (.split encoded " "))]
    (-> (.decode (java.util.Base64/getDecoder) auth)
        (String. (java.nio.charset.Charset/forName "UTF-8"))
        (.split ":"))))

(defn- decode-auth->api-key-test [raw-data]
  (let [[name api-key] (decode-auth raw-data)]
    [name api-key (api-key-test api-key)]))

(defn key-test! [raw-data]
  (let [[name api-key api-test] (decode-auth->api-key-test raw-data)]
    (if api-test
      (do (db/set-api-key! {:name name :api_key api-key})
          (-> {:result :ok}
              (response/ok)))
      (response/not-acceptable {:result :not-acceptable
                                :message "incorrect api-key"}))))
;; test ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;(decode-auth->api-key-test "Basic ZWxlY3Q6OHp2Y3Vzc0xQQXp6N3hiZGlzUWI=")
;; (key-test!  (str "Basic "
;;                  (.encodeToString
;;                   (java.util.Base64/getEncoder)
;;                   (.getBytes "------------------"))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

