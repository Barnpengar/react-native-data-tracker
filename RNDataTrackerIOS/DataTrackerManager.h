//
//  StandardDataTrackerManager.h
//  RNStandardDataTrackerIOS
//
//  Created by Dave Sibiski on 5/15/15.
//  Copyright (c) 2015 Dave Sibiski. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DataTrackerManager : NSObject

//To Thomas Maas, plz get rid of the whatever, i cant code objective c, method should not have any arguments
+ (NSNumber *)getDataIn:(NSNumber *)whatever;

+ (NSNumber *)getDataOut:(NSNumber *)whatever;

+ (NSNumber *)getWifiIn:(NSNumber *)whatever;

+ (NSNumber *)getWifiOut:(NSNumber *)whatever;

@end
