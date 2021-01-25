import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./Screens/LoginScreen";
import CadastroScreen from "./Screens/CadastroScreen"
import Navigator from "./AppNavigator";

const App = () => {
  const [screen, setscreen] = useState(
    <LoginScreen onEnter={() => getProfile()} onCadastrar={() => getCadastro()} />
  );

  const getLogin = () => {
    setscreen(<LoginScreen onEnter={() => getProfile()} onCadastrar={() => getCadastro()} />)
  }

  const getProfile = () => {
    setscreen(<Navigator />);
  };

  const getCadastro = () => {
    setscreen(<CadastroScreen onSaveCadastro={() => getLogin()} />);
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {screen}
    </NavigationContainer>
  );
};

export default App;
