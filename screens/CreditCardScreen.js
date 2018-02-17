import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CreditCardForm from '../components/CreditCardForm.js';

class CreditCardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <CreditCardForm />
      </View>
    );
  }
}

export default CreditCardScreen;
