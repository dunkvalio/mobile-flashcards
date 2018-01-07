import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';

import { background, gray, white, primary } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';

// New Question View
//    An option to enter in the question
//    An option to enter in the answer
//    An option to submit the new question

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  onChangeText = key => value => {
    this.setState({ [key]: value });
  };

  onSubmit = () => {
    const { addCardToDeck, goBack, deckId } = this.props;
    addCardToDeck(deckId, this.state);
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <FormInput
          multiline
          autoCorrect
          blurOnSubmit
          value={this.state.question}
          placeholder="Question"
          onChangeText={this.onChangeText('question')}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <FormInput
          multiline
          autoCorrect
          blurOnSubmit
          value={this.state.answer}
          placeholder="Answer"
          onChangeText={this.onChangeText('answer')}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Button
          borderRadius={5}
          title="Submit"
          color={white}
          backgroundColor={primary}
          buttonStyle={styles.button}
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

AddCard.propTypes = {};

AddCard.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
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
  },
  button: {
    borderWidth: 2,
    borderColor: primary,
    paddingHorizontal: 40,
  },
});

export default AddCard;
