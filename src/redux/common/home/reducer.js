import initialState from '../../initialState';
import { handleActions } from 'redux-actions';
import { CLEAR_SLIDE_PHOTOS, GET_SLIDE_PHOTOS } from '../../actionTypes/home';

const initial = initialState.home;

const reducer = handleActions(
	{
		[GET_SLIDE_PHOTOS]: (state, { payload }) => {
			return {
				sliderPhotos: [...payload],
				isLoad: false
			};
		},
		[CLEAR_SLIDE_PHOTOS]: () => {
			return {
				sliderPhotos: [],
				isLoad: true
			};
		},
	},
	initial,
);

export default reducer;
