import { createAction } from 'redux-actions';
import {SET_SELECTED_ITEM, CLEAR_SELECTED_ITEM} from '../../actionTypes/selectedItem'

export const setSelectedItem = createAction(SET_SELECTED_ITEM);
export const clearSelectedItem = createAction(CLEAR_SELECTED_ITEM);