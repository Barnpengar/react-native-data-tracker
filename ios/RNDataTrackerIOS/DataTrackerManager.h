//
//  StandardDataTrackerManager.h
//  RNStandardDataTrackerIOS
//
//  Created by Dave Sibiski on 5/15/15.
//  Copyright (c) 2015 Dave Sibiski. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DataTrackerManager : NSObject

+ (NSNumber *)getDataIn;

+ (NSNumber *)getDataOut;

+ (NSNumber *)getWifiIn;

+ (NSNumber *)getWifiOut;

@end
