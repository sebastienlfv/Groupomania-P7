import Vue from 'vue'
import VueRouter from 'vue-router'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import homeView from '../views/homeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: registerView
  },
  {
    path: '/home',
    name: 'home',
    component: homeView
  }
]

const router = new VueRouter({
  routes
})

export default router
