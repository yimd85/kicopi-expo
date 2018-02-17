import React, { Component } from 'react';
import Stripe from 'react-native-stripe-api';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Input } from './common';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      mm: '',
      yy: '',
      cvc: '',
      zip: '',
      error: '',
      loading: false
    };
  }

  onButtonPress() {
    const { card, mm, yy, cvc, zip } = this.state;
    console.log(card);
    console.log(mm);
    console.log(yy);
    console.log(cvc);
    console.log(zip);
    const apiKey = 'pk_test_bYA8nL2mJDUecGXtb1nGNoVO';
    const client = new Stripe(apiKey);
    const token = client
      .createToken({
        number: card,
        exp_month: mm,
        exp_year: yy,
        cvc, //shorthand es6
        address_zip: zip
      })
      .then(this.onCardSaveSuccess.bind(this));
  }

  onCardSaveSuccess(props) {
    console.log(props);
    this.setState({
      card: '',
      mm: '',
      yy: '',
      cvc: '',
      zip: ''
    });
  }

  render() {
    return (
      <View>
        <Header headerText="CreditCardForm" />
        <Card>
          <CardSection>
            <Input
              label="Card#:"
              placeholder="4242 4242 4242 4242"
              value={this.state.card}
              onChangeText={card => this.setState({ card })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="MM:"
              placeholder="01"
              value={this.state.mm}
              onChangeText={mm => this.setState({ mm })}
            />

            <Input
              label="YY:"
              placeholder="2020"
              value={this.state.yy}
              onChangeText={yy => this.setState({ yy })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="CVC:"
              placeholder="123"
              value={this.state.cvc}
              onChangeText={cvc => this.setState({ cvc })}
            />

            <Input
              label="ZIP:"
              placeholder="11111"
              value={this.state.zip}
              onChangeText={zip => this.setState({ zip })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Submit</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default CreditCardForm;
