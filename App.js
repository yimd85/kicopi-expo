import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen.js';
import AuthScreen from './screens/AuthScreen.js';
import CreditCardScreen from './screens/CreditCardScreen.js';

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  AuthScreen: {
    screen: AuthScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      headerLeft: null
    }
  },
  CreditCardScreen: {
    screen: CreditCardScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});

export default App;
