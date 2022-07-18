import Header from '../header/Header';
import styles from './style.module.scss';
import SwipeToSlide from '../shared/slickSlider/SlickSlider';
import { useEffect } from 'react';
import Range from './rangeAlco/Range';
import FavouriteBrands from './favourite/FavouriteBrands';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeSliderPhotos } from '../../redux/common/home/thunk';
import { selectSliderPhotos } from '../../redux/common/home/selectors';
import { clearSlidePhotos } from '../../redux/common/home/actions';
import Footer from '../footer/Footer'
import Load from '../shared/loader/Load'

export default function Home() {
	const {sliderPhotos, isLoad} = useSelector(selectSliderPhotos);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchHomeSliderPhotos());
		return () => {
			dispatch(clearSlidePhotos());
		};
	}, [dispatch]);

	return (
		isLoad ? <Load /> : (
		<>
			<Header />
			<div className="containerWithHeader">
				<div className={styles.homeContent}>
					<div>{sliderPhotos[0] && <SwipeToSlide data={sliderPhotos[0].links} />}</div>
					<div>{sliderPhotos[0] && <Range data={sliderPhotos[0].range} />}</div>
					<div>{sliderPhotos[0] && <FavouriteBrands data={sliderPhotos[0].favouriteBrands} />}</div>
				</div>
			</div>
			<Footer />
		</>
		)
	);
}
