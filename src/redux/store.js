import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import home from "./common/home/reducer"
import auth from "./common/auth/reducer"
import shop from "./common/shop/reducer"
import thunk from "redux-thunk"
import selectedItem from "./common/selectedItem/reducer"
import initialState from "./initialState";
import basket from "./common/basket/reducer"
import notifications from "./common/notifications/reducer"

const reducer = combineReducers({
    auth,
    home,
    shop,
    selectedItem,
    basket,
    notifications
})

const store = createStore(reducer,initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );


export default store;