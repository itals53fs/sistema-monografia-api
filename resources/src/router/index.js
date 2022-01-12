import Vue from 'vue'
import VueRouter from 'vue-router'
import appcontainer from '../views/appContainer.vue'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import login from '../views/login'
import Colaboradores from '../views/Colaboradores'

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
      },
      {
        path:'/colaboradores',
        name: 'colaboradores',
        component: Colaboradores
      }
    ]
  },
 {
    path: '/login',
    name: 'Login',
    component: login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router