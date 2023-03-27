import {NativeModules} from 'react-native';

export interface RandomModule {
  getRandomColor(): Promise<[number, number, number]>;
}

export const RandomModule: RandomModule = NativeModules.RandomModule;
