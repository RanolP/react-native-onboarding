import Foundation

@objc(RandomModule)
class RandomModule: NSObject {
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc
    func getRandomColor(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
        resolve([
            Int.random(in:1...255),
            Int.random(in:1...255),
            Int.random(in:1...255)
        ])
    }
}
