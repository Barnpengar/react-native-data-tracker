#import <XCTest/XCTest.h>
#import "Specta.h"

#define EXP_SHORTHAND
#import "Expecta.h"

#import "DataTrackerManager.h"

@interface DataTrackerManager (Test)
@end

SpecBegin(DataTrackerManager)

describe(@"DataTrackerManager", ^{
    
    __block NSDataTracker *dataTracker;
    
    beforeEach(^{
        
        dataTracker = [NSDataTracker standardDataTracker];
        
    });
    
    describe(@"writing", ^{
        
        describe(@"#setObject:forKey:", ^{
            
            it(@"sets a string for given key", ^{
                
                [DataTrackerManager setObject:@"someString" forKey:@"anyKey"];
                
                NSString *sut = [dataTracker objectForKey:@"anyKey"];
                
                expect(sut).to.equal(@"someString");
                
            });
            
            it(@"sets an array for a given key", ^{
                
                [DataTrackerManager setObject:@[@"someStringInAnArray"] forKey:@"anyKey"];
                
                NSArray *sut = [dataTracker arrayForKey:@"anyKey"];
                
                expect(sut).to.equal(@[@"someStringInAnArray"]);
                
            });
            
        });
        
        describe(@"#setBool:forKey:", ^{
            
            it(@"sets a bool for given key", ^{
                
                [DataTrackerManager setBool:YES forKey:@"anyKey"];
                
                BOOL sut = [dataTracker boolForKey:@"anyKey"];
                
                expect(sut).to.equal(YES);
                
            });
            
            it(@"sets a different bool for given key", ^{
                
                [DataTrackerManager setBool:NO forKey:@"anyKey"];
                
                BOOL sut = [dataTracker boolForKey:@"anyKey"];
                
                expect(sut).to.equal(NO);
                
            });
            
        });
        
        describe(@"#removeObjectForKey:", ^{
            
            it(@"removes the object for given key", ^{
                
                [dataTracker setObject:@"anyValue" forKey:@"objectToRemove"];
                
                [DataTrackerManager removeObjectForKey:@"objectToRemove"];
                
                expect([dataTracker objectForKey:@"objectToRemove"]).to.beNil();
                
            });
            
            it(@"removes a boolean value for given key", ^{
                
                [dataTracker setBool:YES forKey:@"objectToRemove"];
                
                [DataTrackerManager removeObjectForKey:@"objectToRemove"];
                
                expect([dataTracker boolForKey:@"objectToRemove"]).to.equal(NO);
                
            });
            
        });
        
    });
    
    describe(@"reading", ^{
        
        describe(@"#arrayForKey:", ^{
            
            it(@"returns the correct array", ^{
                
                [dataTracker setValue:@[@"anyArray"] forKey:@"anyArray"];
                
                NSArray *sut = [DataTrackerManager arrayForKey:@"anyArray"];
                
                expect(sut).to.equal(@[@"anyArray"]);
                
            });
            
            it(@"returns the correct array", ^{
                
                [dataTracker setValue:@[@"different", @"array"] forKey:@"anyArray"];
                
                NSArray *sut = [DataTrackerManager arrayForKey:@"anyArray"];
                
                expect(sut).to.equal(@[@"different", @"array"]);
                
            });
            
        });
        
        describe(@"#stringForKey:", ^{
            
            it(@"returns the correct string", ^{
                
                [dataTracker setValue:@"anyValue" forKey:@"anyKey"];
                
                NSString *sut = [DataTrackerManager stringForKey:@"anyKey"];
                
                expect(sut).to.equal(@"anyValue");
                
            });
            
            it(@"returns a different string", ^{
                
                [dataTracker setValue:@"aDifferentValue" forKey:@"anyKey"];
                
                NSString *sut = [DataTrackerManager stringForKey:@"anyKey"];
                
                expect(sut).to.equal(@"aDifferentValue");
                
            });
            
        });
        
        describe(@"#objectForKey:", ^{
            
            it(@"returns the correct Dictionary", ^{
                
                NSDictionary *testDict = @{@"anything" : @"something"};
                
                [dataTracker setObject:testDict forKey:@"anyKey"];
                
                NSDictionary *sut = [DataTrackerManager objectForKey:@"anyKey"];
                
                expect(sut).to.equal(testDict);
                
            });
            
            it(@"returns a different Dictionary", ^{
                
                NSDictionary *testDict = @{@"anythingElse" : @"somethingElse"};
                
                [dataTracker setObject:testDict forKey:@"anyKey"];
                
                NSDictionary *sut = [DataTrackerManager objectForKey:@"anyKey"];
                
                expect(sut).to.equal(testDict);
                
            });
            
        });
        
        describe(@"#boolForKey:", ^{
            
            it(@"returns the correct Boolean value", ^{
                
                [dataTracker setBool:YES forKey:@"anyKey"];
                
                BOOL sut = [DataTrackerManager boolForKey:@"anyKey"];
                
                expect(sut).to.equal(YES);
                
            });
            
            it(@"returns a different Boolean value", ^{
                
                [dataTracker setBool:NO forKey:@"anyKey"];
                
                BOOL sut = [DataTrackerManager boolForKey:@"anyKey"];
                
                expect(sut).to.equal(NO);
                
            });
        });
        
    });
    
    afterEach(^{
        
        dataTracker = nil;
        
    });

});

SpecEnd