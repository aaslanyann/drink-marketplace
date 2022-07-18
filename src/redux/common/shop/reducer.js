import initialState from '../../initialState';
import { handleActions } from 'redux-actions';
import { CLEAR_SHOP, GET_ITEM } from '../../actionTypes/shop';

const initial = initialState.shop;

const reducer = handleActions(
	{
		[GET_ITEM]: (state, { payload }) => {
			return {
				...state,
				items: [...payload],
				isLoad: true,
			};
		},
		[CLEAR_SHOP]: (state) => {
			return {
				...state,
				items: {},
				isLoad: false,
			};
		},
	},
	initial,
);

export default reducer;
