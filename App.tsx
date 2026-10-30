import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/homeScreen';
import EventScreen from './screens/eventScreen';
import ProfileScreen from './screens/profileScreen';
import BookingsScreen from './screens/bookingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Drawer=createDrawerNavigator()


const App=()=>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='home'>
          <Drawer.Screen name='home' component={HomeScreen} />
          <Drawer.Screen name='booking' component={BookingsScreen} />
          <Drawer.Screen name='events' component={EventScreen} />
          <Drawer.Screen name='profile' component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
export default App;
