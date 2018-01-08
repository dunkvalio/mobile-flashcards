import { RECEIVE_DECKS, RECEIVE_CURRENT_DECK } from './types';
import * as db from '../db';

export const getDecks = () => {
  return dispatch => {
    db.getDecks()
      .then(decks => dispatch({ type: RECEIVE_DECKS, decks }));
  };
};

export const getDeck = id => {
  return dispatch => {
    db.getDeck(id).then(deck => dispatch({ type: RECEIVE_CURRENT_DECK, deck }));
  };
};

export const saveDeckTitle = title => {
  return dispatch => {
    db.saveDeckTitle(title)
      .then(db.getDecks)
      .then(decks => dispatch({ type: RECEIVE_DECKS, decks }));
  };
};

export const addCardToDeck = (title, card) => {
  return dispatch => {
    db.addCardToDeck(title, card)
      .then(db.getDecks)
      .then(decks => {
        dispatch({ type: RECEIVE_DECKS, decks });
        return decks[title]
      })
      .then(deck => dispatch({ type: RECEIVE_CURRENT_DECK, deck }));
  };
};
