import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./screens/Home/Home";

const Tab = createBottomTabNavigator();

function RootNav() {
  let scrOpt = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons = {
        Home: "home",
        Search: "search1",
        Profile: "skin",
      };

      return <AntDesign name={icons[route.name]} color={color} size={33} />;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={scrOpt}
      tabBarOptions={{ showLabel: false, style: { height: 80 } }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default RootNav;
