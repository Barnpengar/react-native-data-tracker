'use strict';

var { NativeModules } = require('react-native');
var Promise = require('bluebird'); // jshint ignore:line
var DataTrackers = NativeModules.RNDataTrackerIOS;

var _getDataIn = Promise.promisify(DataTrackers.getDataIn);
var _getDataOut = Promise.promisify(DataTrackers.getDataOut);

var _getWifiIn = Promise.promisify(DataTrackers.getWifiIn);
var _getWifiOut = Promise.promisify(DataTrackers.getWifiOut);

var DataTracker = {
    getDataIn() {
        _getDataIn();
        return "123";//
    },
    getDataOut() {
        _getDataOut();
        return "3456";//
    },
    getWifiIn() {
        _getWifiIn();
        return "5643456";//
    },
    getWifiOut() {
        var wifioutValue = "1234";
        DataTrackers.getWifiOut((error, data) => {
          if (error) {
            wifioutValue = "12345";
          } else {
            wifioutValue = "123456";
          }
        })
        return wifioutValue;
        // return _getWifiOut();
    }
};

module.exports = DataTracker;
