import { createAction } from 'redux-actions';
import { CLEAR_SLIDE_PHOTOS, GET_SLIDE_PHOTOS } from '../../actionTypes/home';

export const getSlidePhotos = createAction(GET_SLIDE_PHOTOS);
export const clearSlidePhotos = createAction(CLEAR_SLIDE_PHOTOS);
