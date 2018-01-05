import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import DeckView from './DeckView';

const mapStateToProps = ({ currentDeck }, { navigation }) => {
  const { id, title } = navigation.state.params;
  return {
    id,
    title,
    deck: currentDeck,
    onAddCard: () => {
      navigation.navigate('AddCard', {
        deckId: currentDeck.title,
      });
    },
    onStartQuiz: () => {
      navigation.navigate('Quiz', {
        deckId: currentDeck.title,
      });
    },
  };
};

export default connect(mapStateToProps, actions)(DeckView);
