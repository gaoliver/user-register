import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./AppNavigator";

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
}
