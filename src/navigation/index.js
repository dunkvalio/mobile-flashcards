import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { primary, white } from '../utils/colors';

import DeckList from '../views/DeckList';
import DeckView from '../views/DeckView';
import NewDeck from '../views/NewDeck';
import AddCard from '../views/AddCard';

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS',
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
      },
    }
  },
  {
    navigationOptions: {
      header: null,
    },
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? primary : white,
      style: {
        backgroundColor: Platform.OS === 'ios' ? white : primary,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
);

const MainNavigator = StackNavigator(
  {
    Main: { screen: Tabs },
    DeckDetails: {
      screen: DeckView,
      headerMode: 'screen',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title,
        headerTintColor: white,
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: primary,
        },
      }),
    },
    AddCard: {
      screen: AddCard,
      headerMode: 'screen',
      navigationOptions: {
        title: 'Add Card',
        headerBackTitle: null,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: primary,
        },
      }
    }
  },
);

export default MainNavigator;
