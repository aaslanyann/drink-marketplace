import { useState } from 'react';
import styles from './style.module.scss';
import { useSelector } from 'react-redux'
import { selectBasketData } from '../../../redux/common/basket/selectors'

export default function AddToCart({onClick,id}) {
	const basket = useSelector(selectBasketData)
	const [count, setCount] = useState(1);

	const handleClickDecrement = () => {
		setCount(count - 1);
	};
	const handleClickIncrement = () => {
		setCount(count + 1);
	};

	const handleOnClick = () => {
		 onClick(count)
	}

	return (
		<div>
			<div className={styles.content}>
				{count === 1 ? (
					<button className={styles.btn} type="button" onClick={handleClickDecrement} disabled>
						-
					</button>
				) : (
					<button className={styles.btn} type="button" onClick={handleClickDecrement}>
						-
					</button>
				)}
				<span className={styles.count}>{count}</span>
				<button className={styles.btn} type="button" onClick={handleClickIncrement}>
					+
				</button>
			</div>
			<button className={styles.addToCart} onClick={handleOnClick}>Add To Cart</button>
		</div>
	);
}
