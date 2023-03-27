import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen} from './screens/home';
import {RandomScreen} from './screens/random';

const Stack = createNativeStackNavigator();

export function Root(): ReactNode {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Random" component={RandomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
