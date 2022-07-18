import { createAction } from 'redux-actions';
import { ADD_NOTIFICATION, CLEAR_NOTIFICATION } from '../../actionTypes/notifications'


export const addNotification = createAction(ADD_NOTIFICATION)
export const clearNotification = createAction(CLEAR_NOTIFICATION)