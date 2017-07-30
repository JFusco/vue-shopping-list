import Vue from 'vue'
import * as type from './types'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'

const actions = {
  getLists({ commit }) {
    commit(type.FETCH_LISTS)
    commit(SHOW_LOADER)

    return Vue.http.get('/api/list')
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
  },

  saveList({ commit }, data) {
    commit(type.POST_LIST)
    commit(SHOW_LOADER)

    return Vue.http.post('/api/list', data)
      .then(resp => {
        commit(type.POST_LIST_SUCCESS, {
          payload: resp.body
        })
      })
      .catch(error => {
        commit(type.POST_LIST_ERROR, {
          error
        })
      })
      .then(() => {
        commit(HIDE_LOADER)
      })
  }
}

export default actions;
