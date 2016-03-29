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

RCT_EXPORT_METHOD(getDataIn:(id)object callback:(RCTResponseSenderBlock)callback) {
    
    id response = [DataTrackerManager getDataIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getDataOut:(id)object callback:(RCTResponseSenderBlock)callback) {
    
    id response = [DataTrackerManager getDataIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getWifiIn:(id)object callback:(RCTResponseSenderBlock)callback) {
    
    id response = [DataTrackerManager getDataIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}

RCT_EXPORT_METHOD(getWifiOut:(id)object callback:(RCTResponseSenderBlock)callback) {
    
    id response = [DataTrackerManager getDataIn];
    
    if (response) {
        
        callback(@[[NSNull null], response]);
    }
    else {
        
        callback(@[[NSNull null], [NSNull null]]);
    }
}
@end
