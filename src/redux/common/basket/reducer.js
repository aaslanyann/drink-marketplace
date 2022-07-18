import initialState from '../../initialState'
import {handleActions} from 'redux-actions'
import {ADD_ITEM, REMOVE_ITEM, CHOOSE_DRINK, CHOOSE_ALL} from '../../actionTypes/basket'

const initial = initialState.basket;

const reducer = handleActions({
	[ADD_ITEM]: (state, {payload}) => {
		return {
			...state,
			data: [payload,...state.data]
		}
	},
	[REMOVE_ITEM]: (state, {payload}) => {
		return {
			...state,
			data : payload
		}
	},
	[CHOOSE_DRINK]: (state, {payload}) => {
		return {
			...state,
			data: payload
		}
	},
	[CHOOSE_ALL]: (state,{payload}) => {
		return {
			...state,
			data: payload
		}
	}
},initial)

export default reducer