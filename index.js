import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'http://oenplayground.com/api/'

AppRegistry.registerComponent(appName, () => App);
