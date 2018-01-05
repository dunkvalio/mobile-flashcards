import { GET_DECKS } from '../actions/types';
import { getDecks } from '../db';

export default (state = [], action) => {
  switch (action.type) {
    case GET_DECKS:
      const decks = getDecks();
      return Object.keys(decks).map(key => decks[key]);
    default:
      return state;
  }
};
