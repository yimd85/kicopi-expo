import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './common';
import LoginForm from './LoginForm';

class Authentication extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDNg7Yvip2uARARUtmWgPkiGlZRaA9V06M',
      authDomain: 'nycda-b7787.firebaseapp.com',
      databaseURL: 'https://nycda-b7787.firebaseio.com',
      projectId: 'nycda-b7787',
      storageBucket: 'nycda-b7787.appspot.com',
      messagingSenderId: '271662565963'
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
