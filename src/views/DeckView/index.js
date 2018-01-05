import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import DeckView from './DeckView';

const mapStateToProps = ({ currentDeck }, props) => {
  const { id, title } = props.navigation.state.params;
  return {
    id,
    title,
    deck: currentDeck,
    onAddCard: () => {
      props.navigation.navigate('AddCard', {
        deckId: currentDeck.title,
      });
    }
  }
}

export default connect(mapStateToProps, actions)(DeckView);
