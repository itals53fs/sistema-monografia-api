import Vue from 'vue'
import Vuex from 'vuex'
import cadastro from './modules/cadastro.js'
import colaboradores from './modules/colaboradores.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {cadastro, colaboradores}
})
