import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import NewDeck from './NewDeck';

const mapStateToProps = (state, { navigation }) => {
  return {
    goBack: () => {
      navigation.goBack();
    },
  };
};

export default connect(mapStateToProps, actions)(NewDeck);
