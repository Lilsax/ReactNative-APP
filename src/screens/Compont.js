import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./Search";
import NewSongs from "./NewSongs";
import Albums from "./Albums";
import Artists from "./Artists";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="New Songs" component={NewSongs} />
        <Tab.Screen name="Artists" component={Artists} />
        <Tab.Screen name="Top Albums" component={Albums} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
