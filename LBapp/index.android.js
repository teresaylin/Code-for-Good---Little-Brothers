/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Realm from 'realm'

let realm = new Realm({
  schema: [{name: 'Volunteers', properties: {name: 'string'}}]
})

class LBapp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      // <View style={styles.container}>
      <View style={{padding: 20}}>
        <Text style={styles.welcome}>
          Login
        </Text>
        <Text style={styles.instructions}>
          Enter your email address
        </Text>

        <TextInput
          style={styles.welcome}
          placeholder='example: littlebrothers@gmail.com'
          autoCorrect={false}
          onChangeText={(input) => this.setState({input})} 
          value={this.state.input} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LBapp', () => LBapp);
