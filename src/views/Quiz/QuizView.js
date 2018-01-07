import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

import { background, green, red } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import AppButton from '../../components/AppButton';
import QuestionCard from './QuestionCard';

class QuizView extends Component {
  state = {
    currentQuestion: 0,
    score: 0,
  };

  componentDidUpdate() {
    const { deck: { questions }, onFinish } = this.props;
    const { currentQuestion, score } = this.state;
    if (currentQuestion === questions.length) {
      onFinish(score);
      // Reset the Component State
      this.setState(state => ({ currentQuestion: 0, score: 0 }));
    }
    return true;
  }

  onAnswer = (isCorrect) => () => {
    if (isCorrect) {
      this.setState(state => ({
        score: ++state.score,
        currentQuestion: ++state.currentQuestion,
      }));
    } else {
      this.setState(state => ({
        currentQuestion: ++state.currentQuestion,
      }));
    }
  }

  getCurrentQuestion = () => {
    let { currentQuestion } = this.state;
    if (currentQuestion === this.props.deck.questions.length) {
      currentQuestion--;
    }
    return currentQuestion;
  }

  render() {
    const { deck } = this.props;
    const currentQuestion = this.getCurrentQuestion();
    return (
      <View style={styles.container}>
        <View style={styles.questionCountContainer}>
          <Text style={styles.questionCount}>
            {currentQuestion + 1} / {deck.questions.length}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <QuestionCard item={deck.questions[currentQuestion]}/>
          <View style={styles.buttonGroup}>
            <AppButton
              primary
              title='Correct'
              backgroundColor={green}
              buttonStyle={styles.button}
              onPress={this.onAnswer(true)}
            />
            <AppButton
              primary
              title='Incorrect'
              backgroundColor={red}
              buttonStyle={styles.button}
              onPress={this.onAnswer(false)}
            />
          </View>
        </View>
      </View>
    );
  }
}

QuizView.propTypes = {
  deck: PropTypes.shape({
    questions: PropTypes.array.isRequired,
  }),
  onFinish: PropTypes.func.isRequired,
};

QuizView.defaultProps = {
  deck: {
    questions: [],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  questionCountContainer: {
    padding: 8,
  },
  questionCount: {
    fontSize: 24,
  },
  buttonGroup: {
    flex: 1,
    width: '70%',
  },
  button: {
    borderColor: 'transparent',
  },
});

export default QuizView;
