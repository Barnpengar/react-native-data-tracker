'use strict';

var Promise = require('bluebird'); // jshint ignore:line

var _getDataIn = Promise.promisify(DataTracker.getDataIn);
var _getDataOut = Promise.promisify(DataTracker.getDataOut);

var _getWifiIn = Promise.promisify(DataTracker.getWifiIn);
var _getWifiOut = Promise.promisify(DataTracker.getWifiOut);

var DataTracker = {
    _getDataIn() {
        return _getDataIn();
    },
    _getDataOut() {
        return _getDataIn();
    },
    _getWifiIn() {
        return _getDataIn();
    },
    _getWifiOut() {
        return _getDataIn();
    }
};

module.exports = DataTracker;
