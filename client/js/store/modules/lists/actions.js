import Vue from 'vue'
import * as type from './types'
import io from 'socket.io-client'
import store from '../../../store/index'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'

const socket = io()

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

        socket.emit('payload handle', resp.body)
      })
      .catch(error => {
        commit(type.POST_LIST_ERROR, {
          error
        })
      })
      .then(() => {
        commit(HIDE_LOADER)
      })
  },

  deleteList({ commit }, id) {
    commit(type.DELETE_LIST)

    return Vue.http.delete('/api/list', {
      params: {
        id
      }
    })
      .then(() => {
        commit(type.DELETE_LIST_SUCCESS, {
          id
        })
      })
      .catch(error => {
        commit(type.DELETE_LIST_ERROR, {
          error
        })
      })
  }
}

socket.on('payload handle', payload => {
  store.commit(type.POST_LIST_SUCCESS, {
    payload: payload._doc
  })
})

export default actions;
