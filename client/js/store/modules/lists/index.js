import * as type from './types'
import actions from './actions'

const state = {
	isFetching: false,
  error: null,
  data: []
}

const mutations = {
  [type.FETCH_LISTS](state) {
    state.isFetching = true
    state.error = null
  },

  [type.FETCH_LISTS_SUCCESS](state, action) {
    state.isFetching = false
    state.data = action.payload
    state.error = null
  },

  [type.FETCH_LISTS_ERROR](state, action) {
    state.isFetching = false
    state.error = action.error
  }
}

export default {
  state,
  mutations,
  actions
}
