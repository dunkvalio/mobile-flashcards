import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput, Text } from 'react-native-elements';

import { background, gray, white, primary } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';

class NewDeck extends Component {
  state = {
    title: '',
    showErrors: false,
  };

  onChangeText = title => {
    this.setState({ title });
  };

  onSubmit = () => {
    const { title } = this.state;
    if (title) {
      this.props.saveDeckTitle(title);
      this.props.onSubmit(title);
    } else {
      this.setState({ showErrors: true });
    }
  };

  render() {
    const { title, showErrors } = this.state;
    return (
      <View style={styles.container}>
        <Text h1 style={styles.question}>
          What is the title of your new deck?
        </Text>
        <InputField
          value={this.state.title}
          placeholder="Deck Title"
          onChangeText={this.onChangeText}
          showError={(showErrors && !title)}
        />
        <AppButton primary title="Create Deck" onPress={this.onSubmit} />
      </View>
    );
  }
}

NewDeck.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  saveDeckTitle: PropTypes.func.isRequired,
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
});

export default NewDeck;
