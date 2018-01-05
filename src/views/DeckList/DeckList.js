import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-elements';

import { background } from '../../utils/colors';
import DeckItem from './DeckItem';

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks, onSelectDeck } = this.props;
    return (
      <List containerStyle={styles.list}>
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <DeckItem
              title={item.title}
              numberOfCards={item.questions.length}
              onPress={() => onSelectDeck(item)}
            />
          )}
        />
      </List>
    );
  }
}

DeckList.propTypes = {
  decks: PropTypes.array.isRequired,
  getDecks: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: background,
    marginTop: 0,
    paddingBottom: 16,
    minHeight: '100%',
  }
});

export default DeckList;
