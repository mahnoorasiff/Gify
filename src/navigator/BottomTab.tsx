import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GifList from '../screens/GifList';
import FeedbackForm from '../screens/Feedback';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GifList} 
       />
      <Tab.Screen name="Feedback" component={FeedbackForm} />
    </Tab.Navigator>
  );
}

export default MyTabs;