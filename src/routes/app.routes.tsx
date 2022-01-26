import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Onboarding } from "@screens/Onboarding";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { ForgetPassword } from "@screens/ForgetPassword";
import { EmailSent } from "@screens/EmailSent";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
      <Screen name="EmailSent" component={EmailSent} />
    </Navigator>
  );
}
