import { GET_DECK } from "../actions/types";
import { getDecks } from "../db";

const initialState = {
  questions: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DECK:
      const decks = getDecks();
      return decks[action.id];
    default:
      return state;
  }
};
