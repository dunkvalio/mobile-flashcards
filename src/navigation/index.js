import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { primary, white } from '../utils/colors';
import { Main, DeckDetails, AddCard, Quiz, QuizResult } from './screens';

import DeckListScreen from '../views/DeckList';
import DeckViewScreen from '../views/DeckView';
import NewDeckScreen from '../views/NewDeck';
import AddCardScreen from '../views/AddCard';
import QuizScreen from '../views/Quiz';
import QuizResultScreen from '../views/QuizResult';

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DeckListScreen,
      navigationOptions: {
        tabBarLabel: 'DECKS',
      },
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
      },
    },
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

const MainNavigator = StackNavigator({
  [Main]: { screen: Tabs },
  [DeckDetails]: {
    screen: DeckViewScreen,
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
  [AddCard]: {
    screen: AddCardScreen,
    headerMode: 'screen',
    navigationOptions: {
      title: 'Add Card',
      headerBackTitle: null,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
    },
  },
  [Quiz]: {
    screen: QuizScreen,
    headerMode: 'screen',
    navigationOptions: {
      title: 'Quiz',
      headerBackTitle: null,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
    },
  },
  [QuizResult]: {
    screen: QuizResultScreen,
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerTintColor: white,
      headerBackTitle: null,
      headerLeft: null,
      headerStyle: {
        backgroundColor: primary,
      },
    }),
  },
});

export default MainNavigator;
