import { combineReducers } from 'redux';
import { PRODUCT_ACTIONS } from './constants';
import pData from '../../../server/data/items';
const defaultState = pData;

// const status = (rState = initStatus, { type, curry }) =>
//     MOVIE_REQUEST_ACTIONS.has(type) ? curry(rState) : rState;

export const data = (state = defaultState, { type, curry }) =>
    PRODUCT_ACTIONS.has(type) ? curry(state) : state;

// export const currentMovie = (mState = currDef, { type, curry }) =>
//     CURRENT_MOVIE_ACTIONS.has(type) ? curry(mState) : mState;
export default combineReducers({ data });
