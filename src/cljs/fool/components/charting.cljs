(ns fool.components.charting
  (:require [reagent.core :as reagent]))

;; --------------------------------------------------------
;; (defn sidebar []
;;   [:div#sidebar-wrapper
;;    [:ul.sidebar-nav
;;     [:li.sidebar-brand>a {:href "#"} "Simple Sidebar"]
;;     [:li>a {:href "#"} "Page 1"]
;;     [:li>a {:href "#"} "Page 2"]
;;     [:li>a {:href "#"} "Page 3"]]])

;; (defn menu-toggle-render []
;;   [:div.btn.btn-default "Toggle Menu"])

;; (defn menu-toggle-did-mount [this]
;;   (.click (js/$ (r/dom-node this))
;;           (fn [e]
;;             (.preventDefault e)
;;             (.toggleClass (js/$ "#wrapper") "toggled")
;;                                         ;#wrapper will be the id of a div in our home component
;;             )))


;; (defn menu-toggle []
;;   (r/create-class {:reagent-render menu-toggle-render
;;                    :component-did-mount menu-toggle-did-mount}))

;; ------------------------------------------------------------------


;; (defn home-render []
;;   [:div#donut-example ])

;; (defn home-did-mount []
;;   (.Bar js/Morris (clj->js {:element "donut-example"
;;                               :data [{:label "2012" :value 12}
;;                                      {:label "2013" :value 30}
;;                                      {:label "2014" :value 20}]
;;                              :xkeys :label
;;                              :ykeys [:value]
;;                              :labels ["Value"]})))
;; (defn home []
;;   (reagent/create-class {:reagent-render home-render
;;                          :component-did-mount home-did-mount}))

;; ------------------------------------------------------------------
(def chart-config
  {:chart {:type "column"}
   :title {:text "Historic World Population by Region"}
   :subtitle {:text "Source: Wikipedia.org"}
   :xAxis {:categories ["Africa" "America" "Asia" "Europe" "Oceania"]
           :title {:text nil}}
   :yAxis {:min 0
           :title {:text "Population (millions)"
                   :align "high"}
           :labels {:overflow "justify"}}
   :tooltip {:valueSuffix " millions"}
   :plotOptions {:bar {:dataLabels {:enabled true}}}
   :legend {:layout "vertical"
            :align "right"
            :verticalAlign "top"
            :x -40
            :y 100
            :floating true
            :borderWidth 1
            :shadow true}
   :credits {:enabled false}
   :series [{:name "Year 1800"
             :data [107 31 635 203 2]}
            {:name "Year 1900"
             :data [133 156 947 408 6]}
            {:name "Year 2008"
             :data [973 914 4054 732 34]}]
   })

(defn home-render []
  [:div {:style {:min-width "310px" :max-width "800px"
                 :height "400px" :margin "0 auto"}}])

(defn home-did-mount [this]
  (js/Highcharts.Chart. (reagent/dom-node this)
                        (clj->js chart-config)))

(defn home []
  (reagent/create-class {:reagent-render home-render
                         :component-did-mount home-did-mount}))


(defn graph-view []
  (fn []
    (let [my-state (atom 8)]
      [:div
       [:p @my-state]
       [:button {:on-click
                 (fn []
                   (swap!  my-state inc)
                   (println "hoge" @my-state))}
        (str "Here!" @my-state)]
       [:div [:div#d3-node [:svg ]]
        [home]]
       ])))
