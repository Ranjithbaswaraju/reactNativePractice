import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/homeScreen";
import EventScreen from "./screens/eventScreen";
import ProfileScreen from "./screens/profileScreen";
import BookingsScreen from "./screens/bookingScreen";

const Tab=createBottomTabNavigator()
const App=()=>{

  return(
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'gray',
          headerTitleAlign:'center'
        }}
        >
          <Tab.Screen
          name="home"
          component={HomeScreen}
          />
          <Tab.Screen
          name="profile"
          component={ProfileScreen}
          />
          <Tab.Screen
          name="booking"
          component={BookingsScreen}
          />
          <Tab.Screen
          name="events"
          component={EventScreen}
          />

        </Tab.Navigator>
      </NavigationContainer>
  )

}
export default App;