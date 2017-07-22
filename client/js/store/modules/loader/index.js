import * as type from './types'
import actions from './actions'

const state = {
	show: false
}

const mutations = {
	[type.SHOW_LOADER](state) {
		state.show = true
	},

	[type.HIDE_LOADER](state) {
		state.show = false
	}
}

export default {
	state,
	mutations,
	actions
}
