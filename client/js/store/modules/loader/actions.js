import Vue from 'vue'
import * as type from './types'

const actions = {
	showLoader({ commit }){
		commit(type.SHOW_LOADER)
	},

	hideLoader({ commit }){
		commit(type.HIDE_LOADER)
	}
}

export default actions;
