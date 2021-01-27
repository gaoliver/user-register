import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import ProfileScreen from "./Screens/ProfileScreen";
import EditScreen from "./Screens/EditScreen";
import AlterarSenhaScreen from "./Screens/AlterarSenhaScreen";
import LoginScreen from "./Screens/LoginScreen";
import CadastroScreen from "./Screens/CadastroScreen";

const Stack = createStackNavigator();

const defaultNavigatorOptions = (navData) => {
  return {};
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} options={ { headerLeft: null } } />
      <Stack.Screen name="Editar" component={EditScreen} />
      <Stack.Screen name="Alterar senha" component={AlterarSenhaScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
