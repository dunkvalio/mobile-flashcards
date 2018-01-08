import { RECEIVE_CURRENT_DECK } from '../actions/types';

const initialState = {
  questions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_DECK:
      return {
        ...action.deck
      };
    default:
      return state;
  }
};
