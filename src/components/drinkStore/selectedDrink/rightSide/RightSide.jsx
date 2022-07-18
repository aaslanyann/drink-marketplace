import styles from '../style.module.scss'
import StarIcon from '@mui/icons-material/Star'
import { v4 as uuidv4 } from 'uuid'
import { MAIN_COLOR_BLUE } from '../../../../constants/colors'
import AddToCart from '../../addToCart/AddToCart'
import { addItemInBasket } from '../../../../redux/common/basket/action'
import { useDispatch } from 'react-redux'
import Description from "../description/Description"

const RightSide = ({data}) => {
	const {name,price, type,brand = "",region, vintage, description,id} = data;
	const dispatch = useDispatch()
	const handleClickAdd = (count) => {
		data.count = count
		data.sumPrice = count * price;
		data.choose = false;
		dispatch(addItemInBasket(data))
	}

	return (
		<div>
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.stars}>
				{Array(5).fill(null).map(() => <StarIcon key={uuidv4()} style={{color: "#00B67A"}}/>)}
				{`${Math.ceil(Math.random() * 100)} Reviews`}
			</div>
			<p style={{color: MAIN_COLOR_BLUE}} className={styles.price}>{`${price} $`}</p>
			<p className={styles.type}>{`${type} ${brand}`}</p>
			<p className={styles.region}
				 style={{color: MAIN_COLOR_BLUE}}>
				{(region.slice(0, region.indexOf(";")) + ","
					+ region.slice(region.indexOf(";") + 1)).toLowerCase() + " " + vintage}
			</p>
			<div>
				<AddToCart onClick={handleClickAdd} id={id}/>
			</div>
			<Description description={description}/>
		</div>
	)
}

export default RightSide