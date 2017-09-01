import { combineReducers } from 'redux';
import { reducer as products } from './products';
import { reducer as favorites } from './favorties';

export default combineReducers({
  products,
  favorites,
});
