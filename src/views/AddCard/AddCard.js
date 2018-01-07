import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { background, white, primary } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';

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
        <InputField
          value={this.state.question}
          placeholder='Question'
          onChangeText={this.onChangeText('question')}
        />
        <InputField
          value={this.state.answer}
          placeholder='Answer'
          onChangeText={this.onChangeText('answer')}
        />
        <AppButton primary title='Submit' onPress={this.onSubmit} />
      </View>
    );
  }
}

AddCard.propTypes = {
  deckId: PropTypes.string.isRequired,
  addCardToDeck: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    minHeight: '100%',
    alignItems: 'center',
    padding: 8,
  },
});

export default AddCard;
