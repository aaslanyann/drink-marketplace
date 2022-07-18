import styles from '../style.module.scss'
import { v4 as uuidv4 } from 'uuid'
import BasketItem from '../basketItem/BasketItem'


const BasketList = ({onBasketItemChange, onRemoveBasketItem,basketData}) => {
	return (
		<ul className={styles.list}>
			{basketData.map(item => (
				<li key={uuidv4( )} className={styles.listItem}>
					<BasketItem { ...{...item, onRemoveBasketItem, onBasketItemChange}} />
				</li>
			))}
		</ul>
	)
}

export default BasketList