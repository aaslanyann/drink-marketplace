import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'
import { getItem } from './actions'

export const fetchShopCollection = (data) => async (dispatch) => {
	try {
		onSnapshot(collection(db, 'drinks'), (snapshot) => {
			const data = snapshot.docs.map((doc) => doc.data())
			dispatch(getItem(data))
		})
	} catch (error) {
		console.log(error.message)
	} finally {
		// dispatch(closeLoad())
	}
}
