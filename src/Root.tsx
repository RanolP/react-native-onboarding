import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {HomeScreen} from './screens/home';
import {RandomScreen} from './screens/random';

const Stack = createNativeStackNavigator();

export function Root(): ReactNode {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Random" component={RandomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
