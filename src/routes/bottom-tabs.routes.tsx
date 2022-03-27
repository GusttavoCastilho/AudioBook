import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Search } from "@screens/Search";
import { Library } from "@screens/Library";

import { useTheme } from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomTabs() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary_50,
        tabBarInactiveTintColor: theme.colors.neutral_60,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: theme.fonts.medium,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="home" size={24} color={props.color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: (props) => (
            <AntDesign
              name="search1"
              size={24}
              color={props.color}
              fill={props.color}
            />
          ),
        }}
      />
      <Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: (props) => (
            <Ionicons
              name="document-text-outline"
              size={24}
              color={props.color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
