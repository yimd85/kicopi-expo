import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './common';
import LoginForm from './LoginForm';

class Authentication extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDY61G22lz47BWXFMntEcFy2kyW0xSsVmA",
      authDomain: "manager-7305b.firebaseapp.com",
      databaseURL: "https://manager-7305b.firebaseio.com",
      projectId: "manager-7305b",
      storageBucket: "manager-7305b.appspot.com",
      messagingSenderId: "383247611179"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>LogOut</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default Authentication;
