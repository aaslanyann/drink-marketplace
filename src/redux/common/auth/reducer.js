import initialState from '../../initialState';
import { handleActions } from 'redux-actions';
import {
	LOG_OUT,
	SET_LOGGEDIN_USER,
	SWITCH_LOADING_PROCESS,
	UPDATE_USER_ADDRESS,
	ADD_AUTH_STATUS
} from '../../actionTypes/auth';
import { localStorageService } from '../../../services/localstorageService';

const initial = initialState.auth;

const reducer = handleActions(
	{
		[SET_LOGGEDIN_USER]: (state, { payload }) => {
			return {
				user: payload,
				isLoad: false,
			};
		},
		[ADD_AUTH_STATUS]: (state, { payload }) => {
			return {
				...state,
				isLoad: false,
				status: {
					...payload
				}
			};
		},
		[LOG_OUT]: () => {
			localStorageService.clearStorage();
			return {
				user: null,
				isLoad: false,
			};
		},
		[UPDATE_USER_ADDRESS]: (state, { payload }) => {
			console.log(payload, 'address');
			return {
				...state,
				user: {
					...state.user,
					...payload,
				},
				isLoad: false,
			};
		},
		[SWITCH_LOADING_PROCESS]: (state) => {
			return {
				...state,
				isLoad: true,
			};
		},
	},
	initial,
);

export default reducer;
