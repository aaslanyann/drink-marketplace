import { createAction } from 'redux-actions';
import {ADD_ITEM, REMOVE_ITEM, CHOOSE_DRINK, CHOOSE_ALL} from '../../actionTypes/basket'

const addItemInBasket = createAction(ADD_ITEM)
const removeItemInBasket = createAction(REMOVE_ITEM)
const chooseDrink = createAction(CHOOSE_DRINK)
const chooseAllDrink = createAction(CHOOSE_ALL)

export {
	addItemInBasket,
	removeItemInBasket,
	chooseDrink,
	chooseAllDrink
}