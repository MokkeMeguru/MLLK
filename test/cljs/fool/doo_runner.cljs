(ns fool.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [fool.core-test]))

(doo-tests 'fool.core-test)

