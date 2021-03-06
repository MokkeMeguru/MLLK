(ns fool.components.material-ui
  (:require
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [reagent.core :as r]))

;; Example with various components
(defn home-page []
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                {:palette {:text-color (color :green600)}})}
   [:div
    [ui/app-bar {:title "Title"
                 :icon-element-right
                 (r/as-element [ui/icon-button
                                (ic/action-account-balance-wallet)])}]
    [ui/paper
     [:div "Hello"]
     [ui/mui-theme-provider
      {:mui-theme (get-mui-theme {:palette {:text-color (color :blue200)}})}
      [ui/raised-button {:label "Blue button"}]]
     (ic/action-home {:color (color :grey600)})
     [ui/raised-button {:label        "Click me"
                        :icon         (ic/social-group)
                        :on-click     #(println "clicked")}]]]])
