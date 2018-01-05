import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as actions from '../../store/actions';
import { Quiz } from '../../navigation/screens';
import QuizResult from './QuizResult';

const mapStateToProps = ({ currentDeck }, { navigation }) => {
  return {
    deck: currentDeck,
    score: navigation.state.params.score,
    onStartOver: () => {
      navigation.goBack();
    },
    onGoToDetails: () => {
      navigation.goBack(navigation.state.params.quizViewKey);
    }
  };
};

export default connect(mapStateToProps, actions)(QuizResult);
