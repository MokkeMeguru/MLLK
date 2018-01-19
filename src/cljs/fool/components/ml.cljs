(ns fool.components.ml
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.session :as session]
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [cljs-react-material-ui.core :as mui]
   [reagent.core :as r :refer [atom]]
   [fool.components.common :as common]
   [cljs-time.core :as t]
   [cljs-time.format :as tf]
   [cljs-time.coerce :as tc]
   [ajax.core :as ajax]
   [cljs.core.async :refer [<! >! put! timeout chan]]
   [fool.components.charting :as charting])
  )


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; param ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def init-param-arima
  {:Data {:start (atom nil)
          :end (atom nil)
          :title (atom nil)
          :type (atom nil)}
   :Difference (atom nil)
   :ADF (atom nil)
   :ACF (atom nil)
   :PACF (atom nil)
   :ARIMA {:type (atom nil)
           :p (atom nil)
           :q (atom nil)
           :len (atom nil)}})
(defn init-init-param-arima [param-arima]
  (let [data (:Data param-arima)
        arima (:ARIMA param-arima)]
    (reset! (:start data) nil)
    (reset! (:end data) nil)
    (reset! (:title data) nil)
    (reset! (:type data) nil)
    (reset! (:ADF param-arima) nil)
    (reset! (:ACF param-arima) nil)
    (reset! (:PACF param-arima) nil)
    (reset! (:type arima) nil)
    (reset! (:p arima) nil)
    (reset! (:q arima) nil)
    (reset! (:len arima) nil)))

(def init-res-arima
  {:data nil
   :diff nil
   :adf nil
   :acf nil
   :pacf nil
   :arima nil})

(def init-error
  {:message nil})

(defn date->long [date]
  (tc/to-long date))

(defn params->request [params error]
  (let [data (:Data params) difference @(:Difference params) adf @(:ADF params) acf @(:ACF params) pacf @(:PACF params) arima (:ARIMA params)]
   (into {} (list
             {:id (session/get :identity)}
             (if (or (nil? data))
               (swap! error assoc :message "Invalid Parameter: Data is not defined")
                 (let [start @(:start data) end @(:end data) title @(:title data) type @(:type data)]
                   (if (or (nil? start) (nil? end) (nil? title) (nil? type) (= "" title) (= "" type))
                     (swap! error assoc :message "Invalid Parameter: Date")
                     {:data {:start (* 1000 (date->long start)) :end (* 1000 (date->long end)) :title title :type type}})))
             (if (or (nil? difference) (js/isNaN difference)) (swap! error assoc :message "Invalid Parameter: Difference or Date")
                 {:diff (int difference)})
             (when (not (nil? adf))
               (do
                 (type adf)
                 {:adf (int adf)}))
             (when (not (or (nil? acf) (js/isNaN acf))) {:acf (int acf)})
             (when (not (or (nil? pacf) (js/isNaN pacf))) {:pacf (int pacf)})
             (println "type" @(:type arima)"p" @(:p arima) "q" @(:q arima) "len" @(:len arima))
             (when (not (or (nil? arima)))
               (let [type @(:type arima) p @(:p arima) q @(:q arima) len @(:len arima)]
                 (when (not (or (nil? type) (nil? p) (nil? q) (nil? len)))
                   {:arima {:type type :p (int p) :q (int q) :len (if (= 0 (int len)) 20 (int len))}})))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn parameter->send! [param error run-param res send-status]
  (if (nil? param)
    (do
      (println "ERROR PARAMETER")
      (reset! error "Invalid Parameter "))
    (if (:message param) (do (println "ERROR PARAMS")
                             (reset! error (:message param))
                             (println (:message param)))
        (do
          (reset! send-status true)
          (ajax/POST "/ml/arima"
                       {:params  param
                        :handler #(do
                                    (println "Success")
                                    (println param)
                                    (reset! run-param param)
                                    (reset! res {:param param :run-result (:run-result %)})
                                    (reset! send-status false))
                        :error-handler
                        #(do
                           (println "error handler")
                           (println param)
                           (println %)
                           (println (get-in % [:response :message]))
                           (reset! error (get-in % [:response :message]))
                           (reset! send-status false)
                           nil)})))))


(defn parameter->send!! [param error run-param res send-status]
  (reset! send-status true)
  (if (nil? param)
    (do
      (println "ERROR PARAMETER")
      (reset! error "Invalid Parameter "))
    (if (:message param) (do (println "ERROR PARAMS")
                             (reset! error (:message param))
                             (println (:message param)))
        (ajax/POST "/ml/arima"
                   {:params  param
                    :handler #((println "Success")
                               (println param)
                               (reset! run-param param)
                               (reset! res {:param param :run-result (:run-result %)})
                               (reset! send-status false))
                    :error-handler
                    #(do
                       (println "error handler")
                       (println param)
                       (println %)
                       (println (get-in % [:response :message]))
                       (reset! error (get-in % [:response :message]))
                       (reset! send-status false))}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def req-param-arima
  {:Data (fn [p] [(common/datepick-field "start" @(:start p) (fn [_ time] (reset! (:start p) time)))
                 (common/datepick-field "end"  @(:end p) (fn [_ time] (reset! (:end p) time)))
                 (common/material-field "NIKKEI/INDEX" "title" @(:title p) #(reset! (:title p) (-> % .-target .-value)))
                 (common/material-field "close-price" "type" @(:type p) #(reset! (:type p) (-> % .-target .-value)))])
   :Difference (fn [p] [(common/material-field
                        "1" "diff"
                         @p #(reset! p (-> % .-target .-value)))])
   :ADF (fn [p] [(common/material-field
                 "1" "adf"
                 @p #(reset! p (-> % .-target .-value)))])
   :ACF (fn [p] [(common/material-field
                 "20" "acf"
                 @p #(reset! p (-> % .-target .-value)))])
   :PACF (fn [p] [(common/material-field
                 "20" "pacf"
                 @p #(reset! p (-> % .-target .-value)))])
   :ARIMA (fn [p] [(common/material-field "single" "type" @(:type p) #(reset! (:type p) (-> % .-target .-value)))
                  (common/material-field "2" "p" @(:p p) #(reset! (:p p) (-> % .-target .-value)))
                  (common/material-field "2" "q" @(:q p) #(reset! (:q p) (-> % .-target .-value)))
                  (common/material-field "10" "len" @(:len p) #(reset! (:len p) (-> % .-target .-value)))])})

(def req-param-arima-info
  {:Data [:div
          [:p "Variable"]
          [:p.pl-2 "start: start-date"]
          [:p.pl-2 "end: end-date"]
          [:p.pl-2 "title: title"]
          [:p.pl-2 "type: type"]
          [:p.text-center "------"]
          [:p "Notice: We will use quandl's data"]
          [:p "Notice: end is earlier than start"]
          [:p "Reference: " [:pre]
           [:a {:href "#/"} "Time Series Data"]]]
   :Difference [:div
                [:p.pl-2 "Variable"]
                [:p.pl-2 "diff: difference"]
                [:p.text-center "-----"]
                [:p "Notice: N differeced data's length is N less than original's"]
                [:p "Reference: " [:pre]
                 [:a {:href "#/"} "Difference"]]]
   :ADF [:div
         [:p "Variable"]
         [:p.pl-2 "adf: difference"]
         [:p.text-center "-----"]
         [:p "Notice: adf test with N differeced data"]
         [:p "Reference: " [:pre]
          [:a {:href "#/"} "ADF-test"]]]
   :ACF [:div
         [:p "Variable"]
         [:p.pl-2 "acf: value's number"]
         [:p.text-center "-----"]
         [:p "Notice: show N acf's values"]
         [:p "Reference: " [:pre]
          [:a {:href "#/"} "Autocorrelation"]]]
   :PACF [:div
          [:p "Variable"]
          [:p.pl-2 "pacf: value's number"]
          [:p.text-center "-----"]
          [:p "Notice: show N pacf's values"]
          [:p "Reference: " [:pre]
           [:a {:href "#/"} "Partial-Autocorrelation"]]]
   :ARIMA [:div
           [:p "Variable"]
           [:p.pl-2 "type: \"single\" or \"multi\""]
           [:p.pl-2 "p: autoreggresive's coefficient"]
           [:p.pl-2 "q: moving-average's coefficient"]
           [:p.pl-2 "len: predict value's number"]
           [:p.text-center "-----"]
           [:p "Notice: Arima predict with difference's diff"]
           [:p "Recommend: len < (data's length / 10)"]
           [:p "Reference: " [:pre]
            [:a {:href "#/"} "ARIMA"]]]})


(defn show-arima-result [result]
  (let [param (dissoc (:param result) :id)
        res (:run-result result)
        start (/ (get-in param [:data :start]) 1000)
        adf (:adf res)
        acf (:acf res)
        pacf (:pacf res)
        arima (:arima res)]
    [:div [charting/arima-line-chart
           "Raw data" start [{:data (into [] (get-in res [:data :data]))}]]
     [:br]
     [charting/arima-line-chart
      (str "Difference(" (:diff param) ")") start [{:data (into [] (:diff res))}]]
     [:br]
     (when adf
       [:div.mx-auto {:style {:width "720"}}
        [ui/mui-theme-provider
         {:mui-theme (get-mui-theme)}
          [ui/card  
           (r/as-element [ui/card-header {:title (str "ADF test with " (:adf param) " difference")}])
           (r/as-element [ui/card-text
                          [:p.text-center (str "ADF value : " (:adf adf))]
                          [:p.text-center (str "Rejected? : " (if (:reject? adf) "True" "False"))]])]]])
     [:br]
     (when acf
       [charting/arima-bar-chart "ACF graph"
        [{:data (into [] (:val acf))}] (str "Threshold: "(:threshold acf))])
     [:br]
     (when pacf
       [charting/arima-bar-chart "PACF graph"
        [{:data (into [] (:val acf))}] (str "Threshold: "(:threshold pacf))])
     [:br]
     (when arima
       (let [upper (:upper arima)
             lower (:lower arima)
             p     (:p arima)
             q     (:q arima)
             len   (get-in param [:arima :len])
             d     (:d arima)
             aic   (:aic arima)]
         [:div
          [charting/arima-line-chart
           (str "ARIMA (" (count p) "," d "," (count q) ")" ": predicted " len)
           start [{:data (into []  upper)}
                  {:data (into []  lower)}
                  {:data (into [] (get-in res [:data :data]))}]]
          [:div.mx-auto {:style {:width "720"}}
           [ui/mui-theme-provider
             {:mui-theme (get-mui-theme)}
             [ui/card
              (r/as-element [ui/card-header {:title (str "ARIMA (" (count p) "," d "," (count q) ")" ": predicted " len)}])
              (r/as-element [ui/card-text
                             [:p.text-center "p : " (str p)]
                             [:p.text-center "q : " (str q)]
                             [:p.text-center "aic : " aic]])]]]]))
     [:br]]
    ))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ml-settings []
  (let [draw (atom false)
        type (atom nil)
        op (atom nil)
        close #(do (reset! draw false)
                   (reset! op nil))
        open (fn [i] (reset! op i))
        run-param (atom nil)
        result (atom nil)
        error (atom nil)
        send-status (atom false)]
    (fn []
      [:div.container.col-md-12
       [ui/mui-theme-provider
        {:mui-theme (get-mui-theme)}
        [ui/app-bar
         {:title (str "Machine Learning: EXEC " (when @type (str "\"" @type "\"")))
          :on-left-icon-button-touch-tap
          #(when (session/get :identity) (reset! draw true))
          :icon-element-right
          (r/as-element [mui/icon-menu
                         {:icon-button-element
                          (mui/icon-button (ic/action-view-list))}
                         (r/as-element
                          [mui/list
                           (map
                            (fn [p] (r/as-element [:div.text-center
                                                    [mui/flat-button
                                                     {:on-click
                                                      #(reset! type (second p))}
                                                     (first p)]]))
                            [["(S)ARIMA" "(S)ARIMA"]
                             ["Random Forest" "Random Forest"]
                             ["Reset" nil]])])])}
         [ui/mui-theme-provider
          {:mui-theme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
          (cond
            (= @type "(S)ARIMA")
            (let [params init-param-arima]
             [ui/drawer
              {:docked false
               :open @draw
               :on-request-change #(close)}
              [:br]
              [:div.text-center [:p @type]]
              [:br]
              [ui/divider]
              [:br]
              (map (fn [p] [:div.text-center.mb-2 [ui/raised-button
                                                  {:label p :on-click #((open p))}]])
                   ["Data" "Difference" "ADF" "ACF" "PACF" "ARIMA"])
              [:br]
              [ui/divider]
              [:br]
              (when-not (nil? @op)
                [ui/card
                 (r/as-element [ui/card-title {:title @op}])
                 (r/as-element [ui/card-text
                                ((keyword @op) req-param-arima-info)])
                 (r/as-element
                  [ui/card-actions
                   (map
                    #(identity %)
                    (((keyword @op) req-param-arima) ((keyword @op) params)))])])
              [:br]
              [ui/divider]
              [:br]
              [:div.text-center
               [ui/raised-button {:label "Run"
                                  :on-click #(let [request (params->request params error)
                                                   result (parameter->send! request error run-param result send-status)]
                                               (println "req " request)
                                               (init-init-param-arima params)
                                               (close))}]]
              [:br]
              [:div.text-center [ui/raised-button {:label "back" :on-click #(close)}]]])
            (= @type "Random Forest")
            [ui/drawer
             {:docked false
              :open @draw
              :on-request-change #(close)}
             [:br]
             [:div.text-center [:p @type]]
             [:br]
             [ui/divider]
             [:br]
             [:br]
             [:div.text-center [ui/raised-button {:label "back" :on-click #(close)}]]
             ]
            )
          ]]]
       (if @send-status
         [:div.mx-auto {:style {:style {:width "720"}}}
          [ui/mui-theme-provider
            {:mui-theme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
            [ui/circular-progress {:size "{200}" :thickness "{10}"}]]])
       (if @result
         (show-arima-result @result))])))
