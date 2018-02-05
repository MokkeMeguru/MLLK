(ns fool.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [fool.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [fool.components.common :as c]
            [fool.components.registration :as reg]
            [fool.components.login :as l]
            [fool.components.user-menu :as user-menu]
            ;; [fool.components.material_ui :as material]
            [fool.components.ml :as ml]
            [fool.components.charting :as chart])
  (:import goog.History))

;; user-menu ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn user-menu []
  (if-let [id (session/get :identity)]
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item [user-menu/user-form-button id]]
     [:li.nav-item
      [:a.dropdown-item.btn
       {:on-click #(session/remove! :identity)}
       "sign out"]]]
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item [l/login-button]]
     [:li.nav-item [reg/registration-button]]]))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  (let [collapsed? (r/atom true)]
    (fn []
      [:nav.navbar.navbar-dark.bg-success.navbar-expand-md
       {:role "navigation"}
       [:button.navbar-toggler.hidden-sm-up
        {:type "button"
         :data-toggle "collapse"
         :data-target "#collapsing-navbar"} "☰"]
       [:a.navbar-brand {:href "#/"} "MLLK"]
       [:div#collapsing-navbar.collapse.navbar-collapse
        [:ul.nav.navbar-nav.mr-auto
         [nav-link "#/" "Home" :home]
         [nav-link "#/about" "About" :about]
         ;; [nav-link "#/material" "Material" :material]
         (when-let [id (session/get :identity)]
           [nav-link "#/ml" "Machine-Learning" :ml])
         ]
        ]
       [user-menu]])))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(defn home-page []
  [:div.container
   (when-let [docs (session/get :docs)]
     [:div.row>div.col-sm-12
      [:div
       ;; {:dangerouslySetInnerHTML
       ;;  {:__html (md->html docs)}}
       ]])])

(def pages
  {:home #'home-page
   :about #'about-page
   ;; :material #'material/home-page
   :ml #'ml/ml-settings
   :chart #'chart/graph-view})

(defn page []
  [:div
   (when-let [session-modal (session/get :modal)]
     [session-modal])
   [(pages (session/get :page))]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))

;; (secretary/defroute "/material" []
;;   (session/put! :page :material))

(secretary/defroute "/ml" []
  (session/put! :page :ml))

(secretary/defroute "/chart" []
  (session/put! :page :chart))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

;; add identity
(defn init! []
  (load-interceptors!)
  ;; (fetch-docs!)
  (hook-browser-navigation!)
  (session/put! :identity js/identity)
  (mount-components))
