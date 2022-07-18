import styles from './style.module.scss';
import Header from '../header/Header';
import { MAIN_COLOR_BLUE } from '../../constants/colors';
import FilteredList from './filterList/FilteredList';
import { drinks, price } from '../../config/filtersInfo';
import { useEffect, useState } from 'react';
import { fetchShopCollection } from '../../redux/common/shop/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { clearShop } from '../../redux/common/shop/actions';
import ShopList from './shopList/ShopList';
import { selectShop, selectShopIsLoad } from '../../redux/common/shop/selector';
import CustomPagination from '../shared/pagination/CustomPagination';
import Footer from '../footer/Footer'
import Notifications from '../shared/Notifications/Notifications'

export default function DrinkStore() {
	const shopItems = useSelector(selectShop);
	const dispatch = useDispatch();
	const isLoadList = useSelector(selectShopIsLoad);


	const [filterParam, setFilterParam] = useState({
		drink: 'any',
		price: 'any',
	});

	const [dataSliceStartEnd, setDataSliceStartEnd] = useState({
		dataSliceStart: 0,
		dataSliceEnd: 6,
	});

	const { dataSliceStart, dataSliceEnd } = dataSliceStartEnd;
	const { drink: drinkFilter, price: priceFilter } = filterParam;


	let filteredData = [];

	if (isLoadList) {
		let needPrice = priceFilter.match(/[0-9]+/g);
		filteredData = shopItems
			.filter((elem) => (drinkFilter === elem?.drink || drinkFilter === 'any' ? elem : false))
			.filter((elem) =>
				priceFilter === 'any' || (1 * needPrice[0] < elem.price && 1 * needPrice[1] > elem.price)
					? elem
					: false,
			);
	}

	useEffect(() => {
		dispatch(fetchShopCollection());
		return () => {
			dispatch(clearShop());
		};
	}, [dispatch]);

	const handlePaginationChange = (e, currentPage) => {
		setDataSliceStartEnd({
			dataSliceStart: 6 * (currentPage - 1),
			dataSliceEnd: 6 * currentPage,
		});
		window.scrollTo(0,0)
	};

	const handleFilterDrinkChange = (e, item) => {
		setFilterParam({
			...filterParam,
			drink: item,
		});
	};

	const handleFilterPriceChange = (e, item) => {
		setFilterParam({
			...filterParam,
			price: item,
		});
	};

	return (
		<>
			<Header />
			{isLoadList && (
				<>
				<div className={'containerWithHeader'}>
					<div className={styles.content}>
						<div className={styles.filters}>
							<h1 className={styles.title} style={{ color: MAIN_COLOR_BLUE }}>
								Categories
							</h1>
							<FilteredList
								data={drinks}
								title={'BY DRINK'}
								onChange={handleFilterDrinkChange}
								selectItem={drinkFilter}
							/>
							<FilteredList
								data={price}
								title={'BY PRICE'}
								onChange={handleFilterPriceChange}
								selectItem={priceFilter}
							/>
						</div>
						<div className={styles.product}>
							<ShopList data={filteredData.slice(dataSliceStart, dataSliceEnd)} />
						</div>
					</div>
					<div className={styles.pages}>
						<CustomPagination
							onChange={handlePaginationChange}
							count={Math.ceil(filteredData.length / 6)}
						/>
					</div>
				</div>
					<Footer />
				</>
			)}

		</>
	);
}
