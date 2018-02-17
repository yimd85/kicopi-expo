import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Authentication from '../components/Authentication.js';
import AuthScreen from './AuthScreen';
import MapScreen from './MapScreen';
import CreditCardScreen from './CreditCardScreen';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const HomeScreenTabNavigator = TabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: <Text style={{ fontFamily: 'Arial' }}>KiCoPi</Text>,
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={'home'}
            type={'feather'}
            size={30}
            color="#517fa4"
            style={{ color: tintColor }}
          />
        )
      }
    },
    AuthScreen: {
      screen: AuthScreen,
      navigationOptions: {
        title: <Text style={{ fontFamily: 'Arial' }}>KiCoPi</Text>,
        tabBarLabel: 'Auth',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={'user'}
            type={'feather'}
            size={30}
            color="#517fa4"
            style={{ color: tintColor }}
          />
        )
      }
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: {
        title: <Text style={{ fontFamily: 'Arial' }}>KiCoPi</Text>,
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={'map'}
            type={'feather'}
            size={30}
            color="#517fa4"
            style={{ color: tintColor }}
          />
        )
      }
    },
    CreditCardScreen: {
      screen: CreditCardScreen,
      navigationOptions: {
        title: <Text style={{ fontFamily: 'Arial' }}>KiCoPi</Text>,
        tabBarLabel: 'Card',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={'credit-card'}
            type={'feather'}
            size={30}
            color="#517fa4"
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    animationEnabled: true
  }
);

export default HomeScreenTabNavigator;
