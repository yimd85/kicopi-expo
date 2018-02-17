import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Authentication from '../components/Authentication.js';

class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Authentication />
      </View>
    );
  }
}

export default MapScreen;
