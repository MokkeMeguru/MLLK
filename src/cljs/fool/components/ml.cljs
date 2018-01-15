(ns fool.components.ml
  (:require
   [reagent.session :as session]
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [cljs-react-material-ui.core :as mui]
   [reagent.core :as r :refer [atom]]))

(defn request-result [type params]
  )

(defn ml-settings []
  (let [draw (atom false)
        type (atom nil)
        param-map (atom {})
        op (atom nil)
        close #(do (reset! draw false)
                   (reset! op 0))
        open (fn [i] (reset! op i))]
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
             (when @op
                 [ui/card
                  (r/as-element [ui/card-title {:title @op}])
                  (r/as-element [ui/card-text [:div [:p "Reference:"] [:p "Open below link in new tab"] [:br] [:p "link"]]])
                  (r/as-element [ui/card-actions
                                 (r/as-element [ui/text-field {:hint-text "ex." :floating-label-text "Type"}])
                                 (r/as-element [ui/text-field {:hint-text "ex." :floating-label-text "Type"}])])])

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
             ])]]]])))
