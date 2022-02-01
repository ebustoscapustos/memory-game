import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/results',
    name: 'results',
    
    component: () => import('../views/GameResults.vue')
  }
]

const router = new VueRouter({
  routes, 
  mode: 'history'
})

export default router
