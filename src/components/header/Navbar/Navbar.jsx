import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import {
	HOME_ROUTE,
	SHOP_ROUTE,
	SHOPPING_CART_ROUTE,
	SIGN_IN_ROUTE,
	SIGN_UP_ROUTE,
} from '../../../constants/routePath';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CustomBtn from '../../shared/customBtn/CustomBtn';
import { MAIN_COLOR_BLUE, MAIN_COLOR_CORAL } from '../../../constants/colors';
import BasicMenu from '../../dropDown/DropDown';
import { selectUser } from '../../../redux/common/auth/selectors';
import { useSelector } from 'react-redux';
import { selectBasketData } from '../../../redux/common/basket/selectors'

export default function Navbar() {
	const { user } = useSelector(selectUser);
	const basketData = useSelector(selectBasketData)
	const basketDataLength = basketData.length;

	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link to={HOME_ROUTE} className={styles.links}>
						<HomeOutlinedIcon />
						<p>Home</p>
					</Link>
				</li>

				<li>
					<Link to={SHOP_ROUTE} className={styles.links}>
						<ShoppingBagOutlinedIcon />
						<p>Shop</p>

					</Link>
				</li>

				<li className={styles.links}>
					<Link to={SHOPPING_CART_ROUTE} className={styles.links}>
						<LocalGroceryStoreOutlinedIcon />
						<p>My Cart</p>
						{!!basketDataLength && <p className={styles.basketDataLength}>{basketDataLength}</p>}
					</Link>
				</li>
				{!user ? (
					<>
						<li>
							<Link to={SIGN_IN_ROUTE} className={styles.links}>
								<CustomBtn style={{ background: MAIN_COLOR_BLUE }} text="Sign In" />
							</Link>
						</li>

						<li>
							<Link to={SIGN_UP_ROUTE} className={styles.links}>
								<CustomBtn style={{ background: MAIN_COLOR_CORAL }} text="Sign Up" />
							</Link>
						</li>
					</>
				) : (
					<li>
						<BasicMenu />
					</li>
				)}
			</ul>
		</nav>
	);
}
