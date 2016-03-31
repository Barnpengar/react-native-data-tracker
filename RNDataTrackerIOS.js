'use strict';

var { NativeModules } = require('react-native');
var Promise = require('bluebird'); // jshint ignore:line
var DataTracker = NativeModules.RNDataTrackerIOS;

var _getDataIn = Promise.promisify(DataTracker.getDataIn);
var _getDataOut = Promise.promisify(DataTracker.getDataOut);

var _getWifiIn = Promise.promisify(DataTracker.getWifiIn);
var _getWifiOut = Promise.promisify(DataTracker.getWifiOut);

var DataTracker = {
    getDataIn() {
        return _getDataIn();
    },
    getDataOut() {
        return _getDataIn();
    },
    getWifiIn() {
        return _getDataIn();
    },
    getWifiOut() {
        return _getDataIn();
    }
};

module.exports = DataTracker;
