import { combineReducers } from 'redux';
import { reducer as products } from './products/reducer';

export default combineReducers({
    products,
});
