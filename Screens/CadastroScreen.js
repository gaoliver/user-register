import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  DevSettings,
  Alert
} from "react-native";
import Colors from "../Constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import BtnComp from "../Components/Button";
import { TextInput } from "react-native-gesture-handler";

const CadastroScreen = (props) => {
  const [imagem, setimagem] = useState(
    <MaterialIcons
      name="add-photo-alternate"
      size={80}
      color={Colors.primary}
    />
  );

  const excluirConta = () => {
    Alert.alert(
      "Excluir perfil",
      "Tem certeza que deseja excluir seu perfil?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
        },
        {
          text: "Sim",
          onPress: () => DevSettings.reload(),
          style: "destructive"
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        {imagem}
        {/* Nome */}
        <View style={styles.box}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: João da Silva Santos"
          />
        </View>
        {/* E-Mail */}
        <View style={styles.box}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Ex.: joaodasilva@site.com"
          />
        </View>
        {/* E-Mail */}
        <View style={styles.box}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            keyboardType="visible-password"
            placeholder="****"
            textAlign="center"
            secureTextEntry={true}
          />
        </View>
        {/* Salvar */}
          <BtnComp
            text="Salvar"
            btnStyle={styles.button}
            color={Colors.color}
            btnMargin={{marginTop: 20}}
            onPress={props.onSaveCadastro}
          />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  label: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF9",
    marginVertical: 5,
    borderRadius: 10,
  },
  picture: {
    backgroundColor: Colors.primary,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  box: {
    alignItems: "center",
    margin: 10,
  },
});
