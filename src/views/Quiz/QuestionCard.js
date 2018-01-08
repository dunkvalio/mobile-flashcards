import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
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
          <View style={styles.content}>
            <Text h3 style={styles.text}>{question}</Text>
            <Text style={styles.button}>Show Answer</Text>
          </View>
          <View style={styles.content}>
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
    flex: 1,
    width: '90%',
    borderWidth: 0,
  },
  content: {
    flex: 1,
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
    ...Platform.select({
      ios: {
        marginTop: 16,
      },
      android: {
        marginTop: 8,
      },
    }),
  },
});

export default QuestionCard;
