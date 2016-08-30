'use strict';

var { NativeModules } = require('react-native')
var DataTrackers = NativeModules.RNDataTracker

var DataTracker = {
    getDataIn : DataTrackers.getDataIn,
    getDataOut : DataTrackers.getDataOut,
    getWifiIn : DataTrackers.getWifiIn,
    getWifiOut : DataTrackers.getWifiOut
};

module.exports = DataTracker
