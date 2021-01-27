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
  Alert,
} from "react-native";
import Colors from "../Constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import BtnComp from "../Components/Button";
import { TextInput } from "react-native-gesture-handler";

import api from "../service";

const CadastroScreen = ({ navigation }, props) => {
  // NodeJS Request
  const cadastrar = () => {
    api
      .post("", { nome: nome, email: email, senha: senha })
      .then(DevSettings.reload());
  };
  // NodeJS Request END

  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  const [imagem, setimagem] = useState(
    <MaterialIcons
      name="add-photo-alternate"
      size={80}
      color={Colors.primary}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        {/* Nome */}
        <View style={styles.box}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: João da Silva Santos"
            onChangeText={(addNome) => setnome(addNome)}
          />
        </View>
        {/* E-Mail */}
        <View style={styles.box}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Ex.: joaodasilva@site.com"
            onChangeText={(addEmail) => setemail(addEmail)}
          />
        </View>
        {/* Senha */}
        <View style={styles.box}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            keyboardType="visible-password"
            placeholder="****"
            textAlign="center"
            secureTextEntry={true}
            onChangeText={(addSenha) => setsenha(addSenha)}
          />
        </View>
        {/* Salvar */}
        <BtnComp
          text="Salvar"
          btnStyle={styles.button}
          color={Colors.color}
          btnMargin={{ marginTop: 20 }}
          onPress={() => cadastrar()}
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
