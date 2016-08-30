//
//  RNStandardDataTrackerIOS.m
//  RNStandardDataTrackerIOS
//
//  Created by Dave Sibiski on 5/15/15.
//  Copyright (c) 2015 Dave Sibiski. All rights reserved.
//

#import "RNDataTrackerIOS.h"
#import "DataTrackerManager.h"

@implementation RNDataTrackerIOS


RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getDataIn:(RCTResponseSenderBlock)callback) {
    id response = [DataTrackerManager getDataIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getDataOut:(RCTResponseSenderBlock)callback) {
    id response = [DataTrackerManager getDataOut];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getWifiIn:(RCTResponseSenderBlock)callback) {
    id response = [DataTrackerManager getWifiIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getWifiOut:(RCTResponseSenderBlock)callback) {
    id response = [DataTrackerManager getWifiOut];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}
@end
