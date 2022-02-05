import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Search } from "@screens/Search";

import { useTheme } from "styled-components/native";

import HomeSvg from "@assets/home.svg";
import SearchSvg from "@assets/search.svg";
import LibrarySvg from "@assets/library.svg";

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
          tabBarIcon: () => <HomeSvg />,
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <SearchSvg />,
        }}
      />
      <Screen
        name="Library"
        component={Home}
        options={{
          tabBarIcon: () => <LibrarySvg />,
        }}
      />
    </Navigator>
  );
}
