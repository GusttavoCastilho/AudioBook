import React from "react";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { ThemeProvider } from "styled-components/native";

//@ts-ignore
import theme from "@theme";

import { Routes } from "./src/routes";
import { AuthProvider } from "@hooks/auth";

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}
