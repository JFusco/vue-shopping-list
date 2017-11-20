import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import loader from './modules/loader/index'
import lists from './modules/lists/index'
import shoppingList from './modules/shoping-list/index'

Vue.use(Vuex)
Vue.use(VueResource)

const debug = process.env.NODE_ENV !== 'production'

Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    loader,
    lists,
    shoppingList
  },
  strict: false,
  middlewares: debug ? [createLogger()] : []
})
