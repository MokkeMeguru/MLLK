(ns ^:figwheel-no-load fool.app
  (:require [fool.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
