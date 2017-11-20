import * as type from './types'
import actions from './actions'

const state = {
  isFetching: false,
  isPosting: false,
  error: null,
  data: []
}

const mutations = {
  // GET
  [type.FETCH_SHOPPING_LIST](state) {
    state.isFetching = true
    state.error = null
  },
  [type.FETCH_SHOPPING_LIST_SUCCESS](state, action) {
    state.isFetching = false
    state.data = action.payload
    state.error = null
  },
  [type.FETCH_SHOPPING_LIST_ERROR](state, action) {
    state.isFetching = false
    state.error = action.error
  },

  // POST
  [type.POST_SHOPPING_LIST](state) {
    state.isPosting = true
    state.error = null
  },
  [type.POST_SHOPPING_LIST_SUCCESS](state, action) {
    state.isPosting = false
    state.data = action.payload
    state.error = null
  },
  [type.POST_SHOPPING_LIST_ERROR](state, action) {
    state.isPosting = false
    state.error = action.error
  }
}

export default {
  state,
  mutations,
  actions
}
