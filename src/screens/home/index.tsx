import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {RoutesNavigationProp} from '../../navigation/routes';

export function HomeScreen({navigation}: {navigation: RoutesNavigationProp}) {
  const goRandom = () => {
    navigation.navigate('Random');
  };

  return (
    <SafeAreaView>
      <Button title="Go Random!" onPress={goRandom} />
    </SafeAreaView>
  );
}
