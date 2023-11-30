import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'
import MyTabs from './src/navigator/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}