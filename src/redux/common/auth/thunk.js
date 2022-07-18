import { addAuthStatus, setLoggedInUser, setLogOutUser, switchLoadingProcess } from './actions'
import { localStorageService } from '../../../services/localstorageService';
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth'


export const loginUser =
	({email,password}) =>
	async (dispatch) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			const requestUserDate = doc(db, 'users', email);
			const result = await getDoc(requestUserDate);
			dispatch(setLoggedInUser(result.data()))
			localStorageService.setAccessToken(email);
		} catch (error) {
			dispatch(addAuthStatus({ error: "Wrong email or password" }))
		}
	};

export const logOut = () => (dispatch) => {
	try {
		dispatch(setLogOutUser());
	} catch (err) {
		console.log(err);
	}
};

export const fetchUser = (token) => async (dispatch) => {
	dispatch(switchLoadingProcess());
	try {
		const refDoc = doc(db, 'users', token);
		const resp = await getDoc(refDoc);
		dispatch(setLoggedInUser(resp.data()));
	} catch (err) {
		console.log(err.message);
	}
};

