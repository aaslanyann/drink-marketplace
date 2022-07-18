import { useEffect } from 'react'
import Header from '../../header/Header'
import styles from "./style.module.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedItem } from '../../../redux/common/selectedItem/selectors'
import { setSelected } from '../../../redux/common/selectedItem/thunk'
import { clearSelectedItem } from '../../../redux/common/selectedItem/actions'
import Footer from '../../footer/Footer'
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'
import AnimationBottle from './animationBottle/AnimationBottle'


export default function SelectedDrink() {
	const {id} = useParams();
	const dispatch = useDispatch();
	const { current, isLoad } = useSelector(selectSelectedItem);
	const {image} = current;

	useEffect(() => {
		dispatch(setSelected(id))
		return () => {
			dispatch(clearSelectedItem())
		}
	},[dispatch,id])





	return isLoad ? <div>Loading...</div> : (
		<>
		  <Header />
			<div className={`containerWithHeader`}>
				<div className={styles.main}>
					<LeftSide image={image}/>
					<RightSide data={current}/>
					<AnimationBottle image={image}/>
				</div>
			</div>
			<Footer />
		</>
	)
}