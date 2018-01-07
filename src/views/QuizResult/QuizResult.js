import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { background, primary, white } from '../../utils/colors';
import {
  numberOfCardsMessage,
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/helpers';

class QuizResult extends Component {
  state = {
    yTop: new Animated.Value(200),
    yBottom: new Animated.Value(-200),
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  getPercent = (all, correct) => {
    return Math.round((correct / all) * 100);
  }

  render() {
    const { deck, score, onStartOver, onGoToDetails } = this.props;
    const { yTop, yBottom } = this.state;

    Animated.spring(yBottom, { toValue: 0, friction: 2 }).start();
    Animated.spring(yTop, { toValue: 0, friction: 2 }).start();;

    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Animated.Text style={[ styles.score, { transform: [{ translateY: yTop }] }]}>
            Your score:
          </Animated.Text>
          <Animated.Text style={[ styles.score, { transform: [{ translateY: yBottom }] } ]}>
            {this.getPercent(deck.questions.length, score)}%
          </Animated.Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            borderRadius={5}
            title='Restart Quiz'
            color='black'
            backgroundColor={white}
            underlayColor='black'
            buttonStyle={styles.button}
            onPress={onStartOver}
          />
          <Button
            borderRadius={5}
            title='Back To Deck'
            color={white}
            backgroundColor='black'
            underlayColor={white}
            buttonStyle={styles.button}
            onPress={onGoToDetails}
          />
        </View>
      </View>
    );
  }
}

QuizResult.propTypes = {
  deck: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  onStartOver: PropTypes.func.isRequired,
  onGoToDetails: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    textAlign: 'center',
    color: primary,
    fontSize: 64,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flex: 1,
    width: '70%',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 8,
  },
});

export default QuizResult;