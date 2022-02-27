import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabs } from "./bottom-tabs.routes";
import { Settings } from "@screens/Settings";
import { Profile } from "@screens/Profile";
import { BookDetails } from "@screens/BookDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={BottomTabs} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Profile" component={Profile} />
      <Screen name="BookDetails" component={BookDetails} />
    </Navigator>
  );
}
