import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { background, green, red, white } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import QuestionCard from './QuestionCard';

// Quiz View
//    displays a card question
//    an option to view the answer (flips the card)
//    a "Correct" button
//    an "Incorrect" button
//    the number of cards left in the quiz
//    Displays the percentage correct once the quiz is complete

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
            <Button
              borderRadius={5}
              title='Correct'
              color={white}
              backgroundColor={green}
              underlayColor={white}
              buttonStyle={styles.button}
              onPress={this.onAnswer(true)}
            />
            <Button
              borderRadius={5}
              title='Incorrect'
              color={white}
              backgroundColor={red}
              underlayColor={white}
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
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 8,
  },
});

export default QuizView;
