import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

import { background, gray,  } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import AppButton from '../../components/AppButton';

class DeckView extends Component {
  componentDidMount() {
    const { getDeck, id } = this.props;
    getDeck(id);
  }

  render() {
    const { deck, onAddCard, onStartQuiz } = this.props;

    return <View style={styles.container}>
        <View>
          <Text h1 style={styles.title}>
            {deck.title}
          </Text>
          <Text style={styles.subtitle}>
            {numberOfCardsMessage(deck.questions.length)}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <AppButton title="Add Card" onPress={onAddCard} />
          <AppButton primary disabled={!deck.questions.length} title="Start Quiz" onPress={onStartQuiz} />
        </View>
      </View>;
  }
}

DeckView.propTypes = {
  deck: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onAddCard: PropTypes.func.isRequired,
  onStartQuiz: PropTypes.func.isRequired,
};

DeckView.defaultProps = {
  deck: {
    title: 'Deck Name',
    questions: [],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'column',
    textAlign: 'center',
    color: gray,
    fontSize: 24,
  },
  buttonGroup: {
    width: '70%',
  },
});

export default DeckView;
