import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import AddCard from './AddCard';

const mapStateToProps = ({ currentDeck }, { navigation }) => {
  return {
    deckId: currentDeck.title,
    goBack: () => {
      navigation.goBack();
    },
  };
};

export default connect(mapStateToProps, actions)(AddCard);
