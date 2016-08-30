package com.gimitheapp.RNDataTracker;

import android.app.Activity;
import android.net.TrafficStats;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNDataTrackerModule extends ReactContextBaseJavaModule {
    public RNDataTrackerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getDataIn(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {promise.reject("Activity doesn't exist"); return;}
        if (TrafficStats.getMobileRxBytes() == TrafficStats.UNSUPPORTED) {promise.reject("TrafficStats is not supported"); return;}

        promise.resolve((int)(long) TrafficStats.getMobileRxBytes());
    }

    @ReactMethod
    public void getDataOut(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {promise.reject("Activity doesn't exist"); return;}
        if (TrafficStats.getMobileTxBytes() == TrafficStats.UNSUPPORTED) {promise.reject("TrafficStats is not supported"); return;}

        promise.resolve((int) (long) TrafficStats.getMobileTxBytes());
    }

    @ReactMethod
    public void getWifiIn(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {promise.reject("Activity doesn't exist"); return;}
        if (TrafficStats.getTotalRxBytes() == TrafficStats.UNSUPPORTED) {promise.reject("TrafficStats is not supported"); return;}

        promise.resolve((int) (long) (TrafficStats.getTotalRxBytes() - TrafficStats.getMobileRxBytes()));
    }


    @ReactMethod
    public void getWifiOut(Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {promise.reject("Activity doesn't exist"); return;}
        if (TrafficStats.getTotalTxBytes() == TrafficStats.UNSUPPORTED) {promise.reject("TrafficStats is not supported"); return;}

        promise.resolve((int) (long) (TrafficStats.getTotalTxBytes() - TrafficStats.getMobileRxBytes()));
    }




    @Override
    public String getName() {
        return "RNDataTracker";
    }
}
