'use strict';

var { NativeModules } = require('react-native');
var Promise = require('bluebird'); // jshint ignore:line
var DataTracker = NativeModules.RNDataTrackerIOS;

var _setObjectForKey = Promise.promisify(DataTracker.setObjectForKey);
var _setBoolForKey = Promise.promisify(DataTracker.setBoolForKey);

var _arrayForKey = Promise.promisify(DataTracker.arrayForKey);
var _stringForKey = Promise.promisify(DataTracker.stringForKey);
var _objectForKey = Promise.promisify(DataTracker.objectForKey);
var _boolForKey = Promise.promisify(DataTracker.boolForKey);

var _removeItemForKey = Promise.promisify(DataTracker.removeObjectForKey);
var _getAllKeys = Promise.promisify(DataTracker.getAllKeys);

var DataTracker = {
    setArrayForKey(array, key) {
        return _setObjectForKey(array, key);
    },
    setStringForKey(string, key) {
        return _setObjectForKey(string, key);
    },
    setObjectForKey(object, key) {
        return _setObjectForKey(object, key);
    },
    setBoolForKey(bool, key) {
        return _setBoolForKey(bool, key);
    },
    arrayForKey(key) {
        return _arrayForKey(key);
    },
    stringForKey(key) {
        return _stringForKey(key);
    },
    objectForKey(key) {
        return _objectForKey(key);
    },
    boolForKey(key) {
        return _boolForKey(key);
    },
    removeItemForKey(key) {
        return _removeItemForKey(key);
    },
    getAllKeys(key) {
        return _getAllKeys(key);
    }
};

module.exports = DataTracker;
