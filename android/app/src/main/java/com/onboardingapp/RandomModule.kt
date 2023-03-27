package com.onboardingapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableNativeArray

class RandomModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun getRandomColor(promise: Promise) {
        val array = WritableNativeArray()

        array.pushInt((1..255).random())
        array.pushInt((1..255).random())
        array.pushInt((1..255).random())

        promise.resolve(array)
    }

    companion object {
        const val NAME = "RandomModule"
    }
}
