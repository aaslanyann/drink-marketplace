import { createAction } from 'redux-actions';
import {
	SET_LOGGEDIN_USER,
	LOG_OUT,
	UPDATE_USER_ADDRESS,
	SWITCH_LOADING_PROCESS,
	ADD_AUTH_STATUS
} from '../../actionTypes/auth';

export const setLoggedInUser = createAction(SET_LOGGEDIN_USER);
export const setLogOutUser = createAction(LOG_OUT);
export const setUpdateAddress = createAction(UPDATE_USER_ADDRESS);
export const switchLoadingProcess = createAction(SWITCH_LOADING_PROCESS);
export const addAuthStatus = createAction(ADD_AUTH_STATUS);
