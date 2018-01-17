(ns fool.components.ml
  (:require
   [reagent.session :as session]
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [cljs-react-material-ui.core :as mui]
   [reagent.core :as r :refer [atom]]))

(def req-parameters
  (atom {:data nil
         :diff nil
         :adf nil
         :acf nil
         :pacf nil
         :arima nil}))

(def req-param-info
  {:data [:div [:h3 "Variable"
                [:pre] [:p "start: start-date"]
                [:pre] [:p "end: end-date"]
                [:pre] [:p "title: title"]
                [:pre] [:p "type: title"]
                [:p.text-center "------"]
                [:p "Notice: We will use quandl's data"]
                [:p "Reference: " [:pre]
                 [:a {:href "http://localhost:4000"} "Time Series Data"]]]]
   :diff [:div [:h3 "Variable"
                [:pre] [:p "diff: difference"]
                [:p.text-center "-----"]
                [:p "Notice: N differeced data's length is N less than original's"]
                [:p "Reference: " [:pre]
                 [:a {:href "http://localhost:4000"} "Difference"]]]]
   :adf [:div [:h3 "Variable"
               [:pre] [:p "adf: difference"]
               [:p.text-center "-----"]
               [:p "Notice: adf test with N differeced data"]
               [:p "Reference: " [:pre]
                [:a {:href "http://localhost:4000"} "ADF-test"]]]]
   :acf [:div [:h3 "Variable"
               [:pre] [:p "acf: value's number"]
               [:p.text-center "-----"]
               [:p "Notice: show N acf's values"]
               [:p "Reference: " [:pre]
                [:a {:href "http://localhost:4000"} "Autocorrelation"]]]]
   :pacf [:div [:h3 "Variable"
                [:pre] [:p "pacf: value's number"]
                [:p.text-center "-----"]
                [:p "Notice: show N pacf's values"]
                [:p "Reference: " [:pre]
                 [:a {:href "http://localhost:4000"} "Partial-Autocorrelation"]]]]
   :arima [:div [:h3 "Variable"
                 [:pre] [:p "type: \"single\" or \"multi\""]
                 [:pre] [:p "p: autoreggresive's coefficient"]
                 [:pre] [:p "q: moving-average's coefficient"]
                 [:pre] [:p "len: predict value's number"]
                 [:p.text-center "-----"]
                 [:p "Notice: Arima predict with difference's diff"]
                 [:p "Recommend: len < (data's length / 10)"]
                 [:p "Reference: " [:pre]
                  [:a {:href "http://localhost:4000"} "ARIMA"]]]]})


(defn request->result [params]
  )

(defn ml-settings []
  (let [draw (atom false)
        type (atom nil)
        param-map (atom {})
        op (atom nil)
        close #(do (reset! draw false)
                   (reset! op nil))
        open (fn [i] (reset! op i))
        result (atom nil)
        run (atom nil)]
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
                           (r/as-element [:div.text-center
                                          [mui/flat-button
                                           {:on-click
                                            #(reset! type "(S)ARIMA")}
                                            "(S)ARIMA"]])
                           (r/as-element [:br])
                           (r/as-element [:div.text-center
                                          [mui/flat-button
                                           {:on-click
                                            #(reset! type "Random Forest")}
                                           "Random-forest"]])
                           (r/as-element [:br])
                           (r/as-element [:div.text-center
                                          [mui/flat-button
                                           {:on-click
                                            #(reset! type nil)}
                                           "Reset"]])])])}
         [ui/mui-theme-provider
          {:mui-theme (get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
          (cond
            (= @type "(S)ARIMA")
            [ui/drawer
             {:docked false
              :open @draw
              :on-request-change #(close)}
             [:br]
             [:div.text-center [:p @type]]
             [:br]
             [ui/divider]
             [:br]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "Data" :on-click #((open "Data"))}]]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "Difference" :on-click #((open "Difference"))}]]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "ADF" :on-click #((open "ADF"))}]]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "ACF" :on-click #(open "ADF")}]]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "PACF" :on-click #((open "PACF"))}]]
             [:div.text-center.mb-2 [ui/raised-button
                                     {:label "ARIMA" :on-click #((open "ARIMA"))}]]
             [:br]
             [ui/divider]
             [:br]
             (when-not (nil? @op)
               [ui/card
                (r/as-element [ui/card-title {:title #(if (nil? @op) "Param" nil)}])
                (r/as-element [ui/card-text [:div [:p "Reference:"] [:p "Open below link in new tab"] [:br] [:p "link"]]])
                   (r/as-element [ui/card-actions
                                  (r/as-element [ui/text-field {:hint-text "ex." :floating-label-text "Type"}])
                                  (r/as-element [ui/text-field {:hint-text "ex." :floating-label-text "Type"}])])]
               )

             [:br]
             [ui/divider]
             [:br]
             (if true [:div.text-center [ui/raised-button {:label "Run" :on-click #(close)}]])
             [:br]
             [:div.text-center [ui/raised-button {:label "back" :on-click #(close)}]]
             ]
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
             ])
          ]]]
       [:div
        (if-not @draw [fool.components.charting/home])]
       [:br]
       [:div
        (if-not @draw [fool.components.charting/home])]])))
