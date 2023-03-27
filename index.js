/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Root} from './src/Root';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Root);
