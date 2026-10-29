import React from "react";


import HomeScreen from "./screens/homeScreen";
import EventScreen from "./screens/eventScreen";
import EventDetailScreen from "./screens/eventDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

type RootStackParmList = {
  Home: undefined,
  Events: undefined,
  EventDetails: { eventName: string }
}

const Stack = createNativeStackNavigator<RootStackParmList>();


const App=()=>{

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'home' }}
/>
<Stack.Screen 
name="Events"
component={EventScreen}
options={{title:'Sports Events'}}
/>
 <Stack.Screen
      name="EventDetails"
      component={EventDetailScreen}
      options={{ title: 'Event Details' }}
    />
    </Stack.Navigator>
    </NavigationContainer >
  )

}
export default App