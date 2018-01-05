import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import DeckList from './DeckList';

const mapStateToProps = ({ decks }, props) => {
  return {
    onSelectDeck: (deck) => {
      props.navigation.navigate('DeckDetails', {
        id: deck.title,
        title: deck.title
      });
    },
    decks,
  };
}

export default connect(mapStateToProps, actions)(DeckList);
