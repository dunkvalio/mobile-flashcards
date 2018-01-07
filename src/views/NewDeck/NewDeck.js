import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput, Text } from 'react-native-elements';

import { background, gray, white, primary } from '../../utils/colors';
import { numberOfCardsMessage } from '../../utils/helpers';
import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';

class NewDeck extends Component {
  state = {
    title: '',
  };

  onChangeText = title => {
    this.setState({ title });
  };

  onSubmit = () => {
    const { saveDeckTitle, goBack } = this.props;
    saveDeckTitle(this.state.title);
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.question}>
          What is the title of your new deck?
        </Text>
        <InputField
          value={this.state.title}
          placeholder='Deck Title'
          onChangeText={this.onChangeText}
        />
        <AppButton primary title='Create Deck' onPress={this.onSubmit} />
      </View>
    );
  }
}

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
