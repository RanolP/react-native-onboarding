import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import OldApp from './screens/OldApp';

export function Root(): ReactNode {
  return (
    <NavigationContainer>
      <OldApp />
    </NavigationContainer>
  );
}
