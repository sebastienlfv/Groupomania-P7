import Vue from 'vue'
import VueRouter from 'vue-router'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import homeView from '../views/homeView.vue'
import profileView from '../views/profileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  },
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileView
  }

]

const router = new VueRouter({
  routes
})

export default router
