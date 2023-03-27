import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {HomeScreen} from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function Root(): ReactNode {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
