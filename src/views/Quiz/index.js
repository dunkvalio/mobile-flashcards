import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import QuizView from './QuizView';

const mapStateToProps = ({ currentDeck }, { navigation }) => {
  return {
    deck: currentDeck,
    onFinish: (score) => {
      navigation.navigate('QuizResult', {
        score,
        title: currentDeck.title,
        quizViewKey: navigation.state.key,
      });
    }
  };
};

export default connect(mapStateToProps, actions)(QuizView);
