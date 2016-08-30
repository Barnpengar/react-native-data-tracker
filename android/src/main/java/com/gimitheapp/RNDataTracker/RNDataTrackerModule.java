package com.gimitheapp.RNDataTracker;

import android.app.Activity;
import android.net.TrafficStats;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNDataTrackerModule extends ReactContextBaseJavaModule {
    public RNDataTrackerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getDataIn(Callback successCallback, Callback cancelCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {cancelCallback.invoke("Activity doesn't exist"); return;}
        if (TrafficStats.getMobileRxBytes() == TrafficStats.UNSUPPORTED) {cancelCallback.invoke("TrafficStats is not supported"); return;}

        successCallback.invoke(TrafficStats.getMobileRxBytes());
    }

    @ReactMethod
    public void getDataOut(Callback successCallback, Callback cancelCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {cancelCallback.invoke("Activity doesn't exist"); return;}
        if (TrafficStats.getMobileTxBytes() == TrafficStats.UNSUPPORTED) {cancelCallback.invoke("TrafficStats is not supported"); return;}

        successCallback.invoke(TrafficStats.getMobileTxBytes());
    }

    @ReactMethod
    public void getWifiIn(Callback successCallback, Callback cancelCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {cancelCallback.invoke("Activity doesn't exist"); return;}
        if (TrafficStats.getTotalRxBytes() == TrafficStats.UNSUPPORTED) {cancelCallback.invoke("TrafficStats is not supported"); return;}

        successCallback.invoke(TrafficStats.getTotalRxBytes() - TrafficStats.getMobileRxBytes());
    }


    @ReactMethod
    public void getWifiOut(Callback successCallback, Callback cancelCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {cancelCallback.invoke("Activity doesn't exist"); return;}
        if (TrafficStats.getTotalTxBytes() == TrafficStats.UNSUPPORTED) {cancelCallback.invoke("TrafficStats is not supported"); return;}

        successCallback.invoke(TrafficStats.getTotalTxBytes() - TrafficStats.getMobileRxBytes());
    }




    @Override
    public String getName() {
        return "RNDataTracker";
    }
}
