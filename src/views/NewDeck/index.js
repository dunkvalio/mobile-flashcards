import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import * as actions from '../../store/actions';
import { DeckDetails, DeckList, Main } from '../../navigation/screens';
import NewDeck from './NewDeck';

const mapStateToProps = (state, { navigation }) => {
  return {
    onSubmit: (title) => {
      // Navigate to Deck Details view by replacing the current view in the stack
      // in order to keep the back target view
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({
            routeName: Main,
            action: NavigationActions.navigate({ routeName: DeckList }),
          }),
          NavigationActions.navigate({
            routeName: DeckDetails,
            params: { id: title, title },
          }),
        ],
      });
      navigation.dispatch(resetAction);
    },
  };
};

export default connect(mapStateToProps, actions)(NewDeck);
