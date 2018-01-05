import { GET_DECKS, GET_DECK } from './types';

export const getDecks = () => ({ type: GET_DECKS });
export const getDeck = id => ({ type: GET_DECK, id });
