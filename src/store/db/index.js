import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

// Example SCHEMA
const dummyDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

function initialize(decks) {
  if (!decks) {
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(dummyDecks));
    return dummyDecks;
  } else {
    return JSON.parse(decks);
  }
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks => initialize(decks))
    .catch(e => console.warn(e));
}

export function getDeck(id) {
  return getDecks().then(decks => decks[id]);
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    },
  }));
}

export function addCardToDeck(title, card) {
  return getDeck(title)
    .then(deck => ({ ...deck, questions: deck.questions.concat(card) }))
    .then(deck =>
      AsyncStorage.mergeItem(
        DECKS_STORAGE_KEY,
        JSON.stringify({
          [title]: deck,
        }),
      )
    );
}
