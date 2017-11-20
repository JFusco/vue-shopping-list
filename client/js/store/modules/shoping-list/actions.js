import Vue from 'vue'
import * as type from './types'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'

const actions = {
  // getShoppingList({ commit }, id) {
  //   commit(type.FETCH_SHOPPING_LIST)
  //   //commit(SHOW_LOADER)
  //
  //   Vue.http.get(`https://private-85f0f-shoppinglist7.apiary-mock.com/api/list/${id}`)
  //     .then(resp => {
  //       commit(type.FETCH_SHOPPING_LIST_SUCCESS, {
  //         payload: resp.body
  //       })
  //     })
  //     .catch(error => {
  //       commit(type.FETCH_SHOPPING_LIST_ERROR, {
  //         error
  //       })
  //     })
  //     .then(() => {
  //       //commit(HIDE_LOADER)
  //     })
  // },

  saveShoppingList({ commit }, data) {
    commit(type.POST_SHOPPING_LIST)
    commit(SHOW_LOADER)

    return Vue.http.post('/api/shoppingList', data)
      .then(resp => {
        commit(type.POST_SHOPPING_LIST_SUCCESS, {
          payload: resp.body
        })
      })
      .catch(error => {
        commit(type.POST_SHOPPING_LIST_ERROR, {
          error
        })
      })
      .then(() => {
        commit(HIDE_LOADER)
      })
  }
}

export default actions;
