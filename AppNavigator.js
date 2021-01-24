import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./Screens/ProfileScreen";
import CadastroScreen from "./Screens/CadastroScreen";
import EditScreen from "./Screens/EditScreen";
import AlterarSenhaScreen from "./Screens/AlterarSenhaScreen";

const Stack = createStackNavigator();

const defaultNavigatorOptions = (navData) => {
  return {};
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Editar" component={EditScreen} />
      <Stack.Screen name="Alterar senha" component={AlterarSenhaScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
