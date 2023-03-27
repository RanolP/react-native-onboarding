/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RandomModule} from '../../lib/random';

export function RandomScreen(): JSX.Element {
  const [color, setColor] = useState<[number, number, number] | null>(null);

  const applyRandomColor = () => {
    RandomModule.getRandomColor().then(newColor => setColor(newColor));
  };

  console.log(color);

  return (
    <SafeAreaView>
      <Pressable onPress={applyRandomColor}>
        <Text>Get Color</Text>
      </Pressable>
      <View
        style={{
          ...styles.orangeView,
          backgroundColor: color
            ? `rgb(${color[0]} ${color[1]} ${color[2]})`
            : styles.orangeView.backgroundColor,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  orangeView: {
    width: 150,
    height: 150,
    backgroundColor: 'orange',
  },
});
