import initialState from '../../initialState';
import { handleActions } from 'redux-actions';
import { ADD_NOTIFICATION, CLEAR_NOTIFICATION } from '../../actionTypes/notifications';

const initial = initialState.notifications;

const reducer = handleActions(
	{
		[ADD_NOTIFICATION]: (state, { payload }) => {
			return {
				data: { ...payload }
			};
		},
		[CLEAR_NOTIFICATION]: (state,{payload}) => {
			return {
				data: null
			}
		}
	},
	initial,
);

export default reducer;