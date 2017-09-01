import { ADD_FAVORITES, DROP_FAVORITES, SET_FAVORITES } from './constants';

const set = favorites => prev => [ ...new Set(favorites) ];
const add = next => state => [ ...new Set(state).add(next) ];
const drop = next => state => state.filter(x => x !== next);

export const setFavorites = favorites => ({
  type: SET_FAVORITES,
  curry: set(favorites),
  argument: favorites,
});
export const addFavorites = next => ({
  type: ADD_FAVORITES,
  curry: add(next),
  argument: next,
});

export const dropFavorites = next => ({
  type: DROP_FAVORITES,
  curry: drop(next),
  argument: next,
});
