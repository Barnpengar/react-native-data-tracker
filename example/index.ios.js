/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DataTracker = require('react-native-data-tracker');

var datainValue = 0;
var dataoutValue = 0;
var wifiinValue = 0;
var wifioutValue = 0;

class TestProject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    DataTracker.getDataIn()
      .then(val => this.setState({dataIn : val}))
    DataTracker.getDataOut()
      .then(val => this.setState({dataOut : val}))
    DataTracker.getWifiIn()
      .then(val => this.setState({wifiIn : val}))
    DataTracker.getWifiOut()
      .then(val => this.setState({wifiOut : val}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Welcome to React Native!
        </Text>
        <Text style={styles.label}>
          DataIn Value:
        </Text>
        <Text style={styles.instructions}>
          {this.state.dataIn}
        </Text>
        <Text style={styles.label}>
          DataOut Value:
        </Text>
        <Text style={styles.instructions}>
          {this.state.dataOut}
        </Text>
        <Text style={styles.label}>
          WifiIn Value:
        </Text>
        <Text style={styles.instructions}>
          {this.state.wifiIn}
        </Text>
        <Text style={styles.label}>
          WifiOut Value:
        </Text>
        <Text style={styles.instructions}>
          {this.state.wifiOut}
        </Text>
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
  label: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DataTrackerTetster', () => TestProject);
