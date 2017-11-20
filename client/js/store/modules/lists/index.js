import * as type from './types'
import actions from './actions'

const state = {
	isFetching: false,
  isPosting: false,
  isDeleting: false,
  error: null,
  data: []
}

const mutations = {
  //-- GET
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
  },

  //-- POST
  [type.POST_LIST](state) {
    state.isPosting = true
    state.error = null
  },
  [type.POST_LIST_SUCCESS](state, action) {
    state.isPosting = false
    state.data.push(action.payload)
    state.error = null
  },
  [type.POST_LIST_ERROR](state, action) {
    state.isPosting = false
    state.error = action.error
  },

  //-- DELETE
  [type.DELETE_LIST](state) {
    state.isDeleting = true
    state.error = null
  },
  [type.DELETE_LIST_SUCCESS](state, action) {
    state.isDeleting = false

    state.data = state.data.filter(item => {
      return item._id !== action.id
    })
  },
  [type.DELETE_LIST_ERROR](state, action) {
    state.isDeleting = false
    state.error = action.error
  }
}

export default {
  state,
  mutations,
  actions
}
