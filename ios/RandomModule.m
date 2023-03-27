#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RandomModule, NSObject)
    RCT_EXTERN_METHOD(
        getRandomColor:
        (RCTPromiseResolveBlock)resolve
        rejecter:(RCTPromiseRejectBlock)reject
    )
@end
