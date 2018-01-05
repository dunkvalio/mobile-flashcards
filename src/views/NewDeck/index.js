import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput, Text } from 'react-native-elements';

import { background, gray, white } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/text';

// New Deck View
//    An option to enter in the title for the new deck
//    An option to submit the new deck title

class NewDeck extends Component {
  state = {
    title: '',
  }

  onChangeText = (title) => {
    this.setState({ title });
  }

  onSubmit = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.question}>
          What is the title of your new deck?
        </Text>
        <FormInput
          multiline
          autoCorrect
          blurOnSubmit
          value={this.state.title}
          placeholder='Deck Title'
          onChangeText={this.onChangeText}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Button
          borderRadius={5}
          title='Submit'
          color={white}
          backgroundColor='black'
          buttonStyle={styles.button}
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

NewDeck.propTypes = {
};

NewDeck.defaultProps = {
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  question: {
    textAlign: 'center',
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: '95%',
    marginTop: 24,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderBottomColor: gray,
    borderBottomWidth: 1,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 40,
  }
});

export default NewDeck;
