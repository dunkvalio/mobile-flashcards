import { RECEIVE_DECKS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks
      };
    default:
      return state;
  }
};
