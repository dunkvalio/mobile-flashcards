import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { background, red, white } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/text';

// Quiz View
//    displays a card question
//    an option to view the answer (flips the card)
//    a 'Correct' button
//    an 'Incorrect' button
//    the number of cards left in the quiz
//    Displays the percentage correct once the quiz is complete

class QuestionCard extends Component {
  state = {
    isAnswer: false,
  }

  onFlip = () => {
    this.setState(state => ({ isAnswer: !state.isAnswer }));
  }

  render() {
    const { item: { answer, question } } = this.props;
    const { isAnswer } = this.state;

    return (
      <View style={styles.container}>
        <Text h3 style={styles.text}>
          {isAnswer ? answer : question}
        </Text>
        <Button
          title={isAnswer ? 'Question' : 'Answer'}
          color={red}
          backgroundColor={white}
          underlayColor={red}
          onPress={this.onFlip}
        />
      </View>
    );
  }
}

QuestionCard.propTypes = {
  item: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  }
});

export default QuestionCard;
