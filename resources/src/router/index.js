import Vue from 'vue'
import VueRouter from 'vue-router'
import appcontainer from '../views/appContainer.vue'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import log from '../views/log'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'appContainer',
    component: appcontainer,
    children:[
      {
      path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path:'/cadastro',
        name: 'Cadastro',
        component: Cadastro
      }
    ]
  },
 {
    path: '/log',
    name: 'Login',
    component: log
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router