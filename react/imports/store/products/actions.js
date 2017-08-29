import { SET_PRODUCTS, ADD_PRODUCTS } from './constants';

const set = products => prev => [...products];
const add = (...next) => state => state.concat(next);

export const setProducts = products => ({
    type: SET_PRODUCTS,
    curry: set(products),
    argument: products,
});
export const addProducts = (...next) => ({
    type: SET_PRODUCTS,
    curry: add(...next),
    argument: next,
});
