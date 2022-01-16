import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OneStep } from "@screens/Onboarding/OneStep";
import { TwoStep } from "@screens/Onboarding/TwoStep";
import { ThreeStep } from "@screens/Onboarding/ThreeStep";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { ForgetPassword } from "@screens/ForgetPassword";
import { EmailSent } from "@screens/EmailSent";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="OneStep"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="OneStep" component={OneStep} />
      <Screen name="TwoStep" component={TwoStep} />
      <Screen name="ThreeStep" component={ThreeStep} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
      <Screen name="EmailSent" component={EmailSent} />
    </Navigator>
  );
}
