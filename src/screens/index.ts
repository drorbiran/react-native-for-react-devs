import { Navigation } from 'react-native-navigation';
import {ReduxProvider} from '../ReduxProvider';

export function registerScreens() {
  Navigation.registerComponent('Other', () => require('./Other').Other);
  Navigation.registerComponent('Home', () => require('./Home').Home);
  Navigation.registerComponent('PostsList', () => ReduxProvider(require('./PostsList').default), () => require('./PostsList').default);
  Navigation.registerComponent('ViewPost', () => require('./ViewPost').default);
  Navigation.registerComponent('AddPost', () => require('./AddPost').default);
}
