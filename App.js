import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './asserts/screens/Login';
import Signup from './asserts/screens/Signup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     //<Signup/>
      <Login />
      
    );
  }
}