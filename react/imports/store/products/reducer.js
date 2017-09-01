import { combineReducers } from 'redux';

import { PRODUCT_ACTIONS } from './constants';

export const data = (state = [], { type, curry }) =>
  PRODUCT_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data });
