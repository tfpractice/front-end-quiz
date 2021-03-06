import axios from 'axios';
import { ADD_PRODUCTS, SET_PRODUCTS } from './constants';

const getID = prod => prod.id;
const isNew = state => prod => !new Set(state.map(getID)).has(getID(prod));
const set = products => prev => [ ...products ];
const add = (...next) => state => state.concat(next.filter(isNew(state)));

export const setProducts = products => ({
  type: SET_PRODUCTS,
  curry: set(products),
  argument: products,
});
export const addProducts = (...next) => ({
  type: ADD_PRODUCTS,
  curry: add(...next),
  argument: next,
});

export const getProducts = params => dispatch =>
  axios
    .get(`/data`, { params })
    .then(res => dispatch(addProducts(...res.data.items)))
    .catch(console.error);

export const getItem = id => dispatch =>
  axios
    .get(`/item/${id}/data`)
    .then(res => dispatch(addProducts(res.data.item)))
    .catch(console.error);
