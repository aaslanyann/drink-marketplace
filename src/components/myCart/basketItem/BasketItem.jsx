import styles from "./style.module.scss"
import CustomCheckBox from '../../shared/CustomCheckBox'
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../../../constants/routePath'
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasketItem(
	{name, price, image, region,
	 vintage, type, id, count,choose,
	 onRemoveBasketItem, onBasketItemChange}) {
	const handleBasketItemChange = ({checked}) => onBasketItemChange(checked,id)
	const handleRemoveItem = () => onRemoveBasketItem(id);

	return(
			<div className={styles.basketItemBlock}>
				<div className={styles.leftSide}>
					<CustomCheckBox onChange={handleBasketItemChange} checked={choose}/>
					<Link to={`${SHOP_ROUTE}/${id}`}>
						<img src={image} alt='img' className={styles.img}/>
					</Link>
				</div>
				<div className={styles.center}>
					<Link to={`${SHOP_ROUTE}/${id}`}>
						<p className={styles.name}>{name}</p>
					</Link>
					<p className={styles.price}>US ${price}</p>
					<p className={styles.type}>{type}</p>
					<p className={styles.region}>{`${region} ${vintage}`}</p>
				</div>
				<div className={styles.rightSide}>
					<button className={styles.removeIcon} onClick={handleRemoveItem}>
						<DeleteIcon />
					</button>
					<div>
						<span className={styles.count}>{count}</span>
					</div>
				</div>
			</div>
	)
}