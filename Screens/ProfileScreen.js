import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  DevSettings,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../Constants/Colors";
import BtnComp from "../Components/Button";

import api from "../service";

const ProfileScreen = ({ navigation }) => {
  // NodeJS Request
  const teste = () => {
    api.get().then((response) => {
      Alert.alert("", JSON.stringify(response.data))
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  };
  // NodeJS Request END

  const [imagem, setimagem] = useState(
    <Ionicons name="person-circle" size={150} color={Colors.primary} />
  );

  return (
    <View style={styles.screen}>
      {/* Imagem perfil */}
      {imagem}
      {/* Informações */}
      <Text style={styles.infoName}>Nome da Pessoa</Text>
      <Text style={styles.infoEmail}>e-mail</Text>
      {/* Botão Editar */}
      <BtnComp
        text="Editar"
        btnStyle={styles.BtnComp}
        color={Colors.color}
        btnMargin={{ marginTop: 50 }}
        onPress={() => navigation.navigate("Editar")}
      />
      {/* Botão sair */}
      <View style={styles.sairBtn}>
        <Button title="Sair" color="red" onPress={() => DevSettings.reload()} />
      </View>
      {/* Botão Teste */}
      <Button title="Teste" onPress={() => teste()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  infoName: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  infoEmail: {
    color: Colors.primary,
    fontSize: 15,
    fontStyle: "italic",
  },
  picture: {
    backgroundColor: Colors.primary,
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  sairBtn: {
    width: 100,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});
