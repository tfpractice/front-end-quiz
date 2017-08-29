import { combineReducers } from 'redux';
import { PRODUCT_ACTIONS } from './constants';
import pData from '../../../server/data/items';
const defaultState = pData;

export const data = (state = defaultState, { type, curry }) =>
    PRODUCT_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data });
