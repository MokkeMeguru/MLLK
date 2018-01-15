(ns fool.components.ml
  (:require
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :refer [get-mui-theme color]]
   [cljs-react-material-ui.reagent :as ui]
   [cljs-react-material-ui.icons :as ic]
   [cljs-react-material-ui.core :as mui]
   [reagent.core :as r :refer [atom]]))

(defn ml-settings []
  (let [drawer1 (atom false)
        close #(reset! drawer1 false)]
    (fn []
      [:div
       [ui/mui-theme-provider
        {:mui-theme (get-mui-theme)}
        [ui/app-bar
             {:title "Title"
              :on-left-icon-button-touch-tap #(reset! drawer1 true)}
         [ui/drawer
          {:docked false
           :open @drawer1
           :on-request-change #(reset! drawer1 false)}
          [ui/raised-button {:label "Back" :on-click #(close)}]]]]])))
