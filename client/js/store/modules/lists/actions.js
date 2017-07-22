import Vue from 'vue'
import * as type from './types'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'

const actions = {
  getLists({ commit }) {
    commit(type.FETCH_LISTS)
    commit(SHOW_LOADER)

    Vue.http.get('https://private-85f0f-shoppinglist7.apiary-mock.com/api/list')
      .then(resp => {
        commit(type.FETCH_LISTS_SUCCESS, {
          payload: resp.body
        })
      })
      .catch(error => {
        commit(type.FETCH_LISTS_ERROR, {
          error
        })
      })
      .then(() => {
        commit(HIDE_LOADER)
      })
  }
}

export default actions;
