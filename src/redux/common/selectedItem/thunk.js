import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'
import { setSelectedItem } from './actions'

export const setSelected = (id) => async (dispatch) => {
	try {
		onSnapshot(collection(db, 'drinks'), (snapshot) => {
			const data = snapshot.docs.map((doc) => doc.data()).find(elem => elem.id === id)
			dispatch(setSelectedItem(data))
		})
	} catch (error) {
		console.log(error.message)
	}
}