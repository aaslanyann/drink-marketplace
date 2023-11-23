import ShopListItem from '../shopListItem/shopListItem';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';

export default function ShopList({ data }) {
	return (
		<ul className={styles.container}>
			{data.map((elem) => (
				<ShopListItem data={elem} key={uuidv4()} />
			))}
		</ul>
	);
}
