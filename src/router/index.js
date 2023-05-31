import { createRouter, createWebHistory } from 'vue-router'
import PiniaView from "@/views/PiniaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PiniaView',
      component: PiniaView
    },
    {
      path: '/VuexView',
      name: 'VuexView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VuexView.vue')
    }
  ]
})

export default router
