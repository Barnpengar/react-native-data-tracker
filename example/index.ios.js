/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DataTracker = require('react-native-data-tracker');
// var UserDefaults = require('react-native-userdefaults-ios');

var datainValue = 0;
var dataoutValue = 0;
var wifiinValue = 0;
var wifioutValue = 0;

// DataTracker.getDataIn((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     datainValue = response;
//   }
// })

// DataTracker.getDataOut((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     dataoutValue = response;
//   }
// })

// DataTracker.getWifiIn((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     wifiinValue = response;
//   }
// })

// DataTracker.getWifiOut((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     wifioutValue = response;
//   }
// })

class TestProject extends Component {
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
        {DataTracker.getDataIn()}
        </Text>
        <Text style={styles.label}>
          DataOut Value:
        </Text>
        <Text style={styles.instructions}>
        {DataTracker.getDataOut()}
        </Text>
        <Text style={styles.label}>
          WifiIn Value:
        </Text>
        <Text style={styles.instructions}>
        {DataTracker.getWifiIn()}
        </Text>
        <Text style={styles.label}>
          WifiOut Value:
        </Text>
        <Text style={styles.instructions}>
        {DataTracker.getWifiOut()}
        </Text>
        <Text style={styles.instructions}>
          {'\n'}Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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