import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { DeckDetails } from '../../navigation/screens';
import DeckList from './DeckList';

const mapStateToProps = ({ decks }, { navigation }) => {
  return {
    onSelectDeck: (deck) => {
      navigation.navigate(DeckDetails, {
        id: deck.title,
        title: deck.title
      });
    },
    decks,
  };
};

export default connect(mapStateToProps, actions)(DeckList);
