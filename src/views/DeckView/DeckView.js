import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { background, gray, white } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/text';

// Individual Deck View
//  displays the title of the Deck
//  displays the number of cards in the deck
//  displays an option to start a quiz on this specific deck
//  An option to add a new question to the deck

class DeckView extends Component {
  componentDidMount() {
    const { getDeck, id } = this.props;
    getDeck(id);
  }

  render() {
    const { deck, onAddCard, onStartQuiz } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text h1>{deck.title}</Text>
          <Text style={styles.subtitle}>{numberOfCardsMessage(deck.questions.length)}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            borderRadius={5}
            title='Add Card'
            color='black'
            backgroundColor={white}
            underlayColor='black'
            buttonStyle={styles.button}
            onPress={onAddCard}
          />
          <Button
            borderRadius={5}
            title='Start Quiz'
            color={white}
            backgroundColor='black'
            underlayColor={white}
            buttonStyle={styles.button}
            onPress={onStartQuiz}
          />
        </View>
      </View>
    );
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 140,
    paddingBottom: 140,
  },
  subtitle: {
    textAlign: 'center',
    color: gray,
    fontSize: 24,
  },
  buttonGroup: {
    width: '70%',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 3,
  }
});

export default DeckView;
