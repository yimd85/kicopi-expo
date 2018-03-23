import React, { Component } from 'react';
import Stripe from 'react-native-stripe-api';
import { View, StyleSheet } from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput
} from 'react-native-credit-card-input';
import { Header, Button, CardSection } from './common';

const USE_LITE_CREDIT_CARD_INPUT = false;

class CreditCardForm extends Component {
  state = {};

  onButtonPress() {
    console.log(this.state);
  }

  onChange = formData => {
    const formSubmit = formData.values;
    console.log(JSON.stringify(formData, null, ' '));
    this.setState({
      number: formSubmit.number,
      exp_month: parseInt(formSubmit.expiry.substr(0, 2), 0),
      exp_year: parseInt(formSubmit.expiry.substr(3, 2), 0) + 2000,
      cvc: formSubmit.cvc,
      name: formSubmit.name,
      valid: formData.valid
    });
  };

  onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    return (
      <View>
        <Header headerText="CreditCardForm" />
        <View style={s.container}>
          {USE_LITE_CREDIT_CARD_INPUT ? (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}
              validColor={'black'}
              invalidColor={'red'}
              placeholderColor={'darkgray'}
              onFocus={this.onFocus}
              onChange={this.onChange}
            />
          ) : (
            <CreditCardInput
              // autoFocus
              requiresName
              requiresCVC
              // requiresPostalCode
              labelStyle={s.label}
              inputStyle={s.input}
              validColor={'black'}
              invalidColor={'red'}
              placeholderColor={'darkgray'}
              onFocus={this.onFocus}
              onChange={this.onChange}
            />
          )}
        </View>
        <CardSection>
          {this.state.valid === true ? (
            <Button onPress={this.onButtonPress.bind(this)}>Submit</Button>
          ) : null}
        </CardSection>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginTop: 60
  },
  label: {
    color: 'black',
    fontSize: 12
  },
  input: {
    fontSize: 16,
    color: 'black'
  }
});

export default CreditCardForm;
