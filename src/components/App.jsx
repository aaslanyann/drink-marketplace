import SignUp from './Auth/SignUp/SignUp';
import SignIn from './Auth/SignIn/SignIn';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
	HOME_ROUTE,
	SHOP_ROUTE,
	SHOPPING_CART_ROUTE,
	SIGN_IN_ROUTE,
	SIGN_UP_ROUTE,
	USER_ACCOUNT_ROUTE,
} from '../constants/routePath';
import Home from './home/Home';
import DrinkStore from './drinkStore/DrinkStore';
import MyCart from './myCart/MyCart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageService } from '../services/localstorageService';
import Load from './shared/loader/Load';
import MyAcc from './myAccount/MyAcc';
import { fetchUser } from '../redux/common/auth/thunk';
import { selectUser } from '../redux/common/auth/selectors';
import SelectedDrink from './drinkStore/selectedDrink/SelectedDrink'

function App() {
	const token = localStorageService.getAccessToken();
	const dispatch = useDispatch();
	const { isLoad, user } = useSelector(selectUser);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (user && pathname.toLowerCase().includes('sign')) {
			navigate(HOME_ROUTE);
		}
		if (token && !user) {
			dispatch(fetchUser(token));
		}
	}, [dispatch, token, user, pathname,navigate]);

	return isLoad ? (
		<Load />
	) : (
		<div className="App">
			<Routes>
				<Route path={SIGN_UP_ROUTE} element={<SignUp />} />
				<Route path={SIGN_IN_ROUTE} element={<SignIn />} />
				<Route path={HOME_ROUTE} element={<Home />} />
				<Route path={SHOP_ROUTE} element={<DrinkStore />} />
				<Route path={`${SHOP_ROUTE}/:id`} element={<SelectedDrink />} />
				<Route path={SHOPPING_CART_ROUTE} element={<MyCart />} />
				<Route path={USER_ACCOUNT_ROUTE} element={<MyAcc />} />
			</Routes>
		</div>
	);
}

export default App;
