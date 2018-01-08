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
    showErrors: false,
  };

  onChangeText = key => value => {
    this.setState({ [key]: value });
  };

  onSubmit = () => {
    const { answer, question } = this.state;
    if(answer && question) {
      const { addCardToDeck, goBack, deckId } = this.props;
      addCardToDeck(deckId, { answer, question });
      goBack();
    } else {
      this.setState({ showErrors: true });
    }
  };

  render() {
    const { answer, question, showErrors } = this.state;

    return (
      <View style={styles.container}>
        <InputField
          value={question}
          placeholder='Question'
          onChangeText={this.onChangeText('question')}
          showError={(showErrors && !question)}
        />
        <InputField
          value={answer}
          placeholder='Answer'
          onChangeText={this.onChangeText('answer')}
          showError={(showErrors && !answer)}
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
