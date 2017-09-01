import { FAVORITE_ACTIONS } from './constants';

const favorites = (state = [], { type, curry }) =>
  FAVORITE_ACTIONS.has(type) ? curry(state) : state;

export default favorites;
