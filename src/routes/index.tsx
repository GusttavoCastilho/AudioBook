import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";
import { BottomTabs } from "@routes/bottom-tabs.routes";

import { useAuth } from "@hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user?.id ? <BottomTabs /> : <AppRoutes />}
    </NavigationContainer>
  );
}
