import { createAction } from 'redux-actions';
import { CLEAR_SHOP, GET_ITEM } from '../../actionTypes/shop';

export const getItem = createAction(GET_ITEM);
export const clearShop = createAction(CLEAR_SHOP);
