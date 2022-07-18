import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../../../constants/routePath';
import { MAIN_COLOR_BLUE } from '../../../constants/colors';
import AddToCart from '../addToCart/AddToCart';
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedItem } from '../../../redux/common/selectedItem/actions'
import { addItemInBasket } from '../../../redux/common/basket/action'
import { selectBasketData } from '../../../redux/common/basket/selectors'
import typesForSnackbar from '../../../config/snackbarTypes'
import { addNotification, clearNotification } from '../../../redux/common/notifications/actions'

export default function ShopListItem({ data }) {
	const dispatch = useDispatch();
	const basket = useSelector(selectBasketData)
	const { image, name, price, id} = data;
	const handleClickImg = () => {
		dispatch(setSelectedItem(data))
	}
	const handleClickAdd = (count) =>  {
		if(!basket.some(item => item.id === id)) {
			data.count = count
			data.sumPrice = count * price;
			data.choose = false;
			dispatch(addItemInBasket(data))
			dispatch(addNotification(typesForSnackbar.success))
		} else {
			dispatch(addNotification(typesForSnackbar.info))
		}

	}

	return (
		<li className={styles.item}>
			<div className={styles.itemBlock}>
				<div className={styles.bottleImgBlock}>
					<Link to={`${SHOP_ROUTE}/${id}`} onClick={handleClickImg}>
						<img src={image} alt="img" className={styles.img} />
					</Link>
				</div>
				<p className={styles.priceTitle} style={{ color: MAIN_COLOR_BLUE }}>
					{`$ ${price}`}
				</p>
				<h3 className={styles.name}>{name}</h3>
				<div>
					<AddToCart onClick={handleClickAdd} id={id}/>
				</div>
			</div>
		</li>
	);
}
