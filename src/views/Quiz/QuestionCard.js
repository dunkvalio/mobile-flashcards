import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';

import { background, red } from '../../utils/colors';

class QuestionCard extends Component {
  render() {
    const { item: { answer, question } } = this.props;
    return (
      <View style={styles.container}>
        <FlipCard
          style={styles.card}
          friction={8}
          perspective={800}
          useNativeDriver
          alignWidth
          clickable
          flipHorizontal
          flipVertical={false}
          flip={false}
        >
          <View>
            <Text h3 style={styles.text}>{question}</Text>
            <Text style={styles.button}>Show Answer</Text>
          </View>
          <View>
            <Text h4 style={styles.text}>{answer}</Text>
            <Text style={styles.button}>Show Question</Text>
          </View>
        </FlipCard>
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
  card: {
    flex: 0.5,
    width: '90%',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    color: red,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default QuestionCard;
