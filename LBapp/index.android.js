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
  Button,
  Alert
} from 'react-native';

import Realm from 'realm'

let realm = new Realm({
  schema: [{name: 'Volunteers', properties: {name: 'string'}}]
})

const onButtonPress = () => {
  Alert.alert('Button has been pressed')
}

class LBapp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: ''
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
          onChangeText={(email) => this.setState({email})} 
          value={this.state.email} />

        <Text style={styles.instructions}>
          Enter your password
        </Text>

        <TextInput
          style={styles.welcome}
          placeholder=''
          autoCorrect={false}
          onChangeText={(pwd) => this.setState({pwd})} 
          value={this.state.pwd} />

        <Button
          onPress={onButtonPress}
          title="Login"
          color="#841584"
          accessibilityLabel="Login" />

        <Button
          onPress={onButtonPress}
          title="Forgot password"
          color="#841584"
          accessibilityLabel="Forgot password" />

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
