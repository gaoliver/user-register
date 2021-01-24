import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen"
import Navigator from "./AppNavigator"

const App = () => {
  const [screen, setscreen] = useState(<LoginScreen onEnter={() => getProfile()} />)

  const getProfile = () => {
    setscreen(<Navigator />)
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {screen}
    </NavigationContainer>
  );
};

export default App;
