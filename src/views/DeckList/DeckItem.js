import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { gray } from '../../utils/colors';

const DeckItem = ({ title, numberOfCards, onPress }) => {
  const cards = numberOfCards === 1 ? 'card' : 'cards';
  return (
    <TouchableOpacity onPress={onPress}>
      <Card title={title} wrapperStyle={styles.container}>
        <Text style={styles.content}>
          {numberOfCards} {cards}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

DeckItem.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfCards: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: gray,
  },
});

export default DeckItem;
