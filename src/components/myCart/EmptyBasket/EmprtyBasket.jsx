import styles from '../style.module.scss'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'


const EmptyBasket = () => {
	return (
		<div className={styles.emptyBlock}>
			<RemoveShoppingCartIcon />
			<p>Empty</p>
		</div>
	)
}


export default EmptyBasket