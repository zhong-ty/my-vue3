import { createRouter, createWebHashHistory } from "vue-router";
import { constanceRoute } from './route'

let router = createRouter({
  history: createWebHashHistory(),
  routes: constanceRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router