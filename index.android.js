'use strict';

var { NativeModules } = require('react-native');
var DataTrackers = NativeModules.RNDataTracker;
const promisify = require("es6-promisify");

var _getDataIn = promisify(DataTrackers.getDataIn);
var _getDataOut = promisify(DataTrackers.getDataOut);

var _getWifiIn = promisify(DataTrackers.getWifiIn);
var _getWifiOut = promisify(DataTrackers.getWifiOut);

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
