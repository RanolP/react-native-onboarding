import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Screens = {
  Home: 'Home',
  Random: 'Random',
} as const;

export const Routes = {
  [Screens.Home]: undefined,
  [Screens.Random]: undefined,
};

export type Routes = typeof Routes;
export type RoutesNavigationProp = NativeStackNavigationProp<Routes>;
