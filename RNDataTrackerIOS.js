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
        return _getDataIn()
    },
    getDataOut() {
        return _getDataOut()
    },
    getWifiIn() {
        return _getWifiIn()
    },
    getWifiOut() {
        return _getWifiOut()
    }
};

module.exports = DataTracker
