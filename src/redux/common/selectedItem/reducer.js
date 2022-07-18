import initialState from '../../initialState';
import { handleActions } from 'redux-actions';
import { SET_SELECTED_ITEM,  CLEAR_SELECTED_ITEM} from '../../actionTypes/selectedItem';

const initial = initialState.selectedItem;

const reducer = handleActions(
	{
		[SET_SELECTED_ITEM]: (state, { payload }) => {
			return {
				...state,
					current: payload,
					isLoad: false
			};
		},
		[CLEAR_SELECTED_ITEM]: () => {
			return {
					current: {},
					isLoad: true
			};
		},
	},
	initial,
);

export default reducer;