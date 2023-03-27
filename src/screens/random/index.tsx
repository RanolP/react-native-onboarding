/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {RandomModule} from '../../lib/random';

export function RandomScreen(): JSX.Element {
  const [color, setColor] = useState<[number, number, number] | null>(null);

  const applyRandomColor = () => {
    RandomModule.getRandomColor().then(newColor => setColor(newColor));
  };

  const startOffset = useSharedValue({dx: 0, dy: 0});
  const currentOffset = useSharedValue({dx: 0, dy: 0});
  const positionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: currentOffset.value.dx,
      },
      {translateY: currentOffset.value.dy},
    ],
  }));

  const gesture = Gesture.Pan()
    .onChange(e => {
      currentOffset.value = {
        dx: e.translationX + startOffset.value.dx,
        dy: e.translationY + startOffset.value.dy,
      };
    })
    .onEnd(e => {
      startOffset.value.dx += e.translationX;
      startOffset.value.dy += e.translationY;
    });

  return (
    <GestureDetector gesture={gesture}>
      <SafeAreaView>
        <Pressable onPress={applyRandomColor}>
          <Text>Get Color</Text>
        </Pressable>
        <Animated.View
          style={[
            {
              ...styles.orangeView,
              backgroundColor: color
                ? `rgb(${color[0]} ${color[1]} ${color[2]})`
                : styles.orangeView.backgroundColor,
            },
            positionStyle,
          ]}
        />
      </SafeAreaView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  orangeView: {
    width: 150,
    height: 150,
    backgroundColor: 'orange',
  },
});
