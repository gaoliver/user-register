import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Colors from "../Constants/Colors";
import BtnComp from "../Components/Button";
import api from "../service";

const LoginScreen = ({navigation}, props) => {
  // NodeJS Request
  const onEnter = () => {
    api.get("", { params: { email: email, senha: senha } }).then((res) => {
      console.log(res.data);
      const arr = Array.from(res.data);
      if (arr.length == 0) {
        Alert.alert("Erro de autenticação", "E-mail ou senha incorretos");
      } else {
        console.log("Ok! Entrando")
        navigation.navigate('Perfil')
      }
    });
  };
  // NodeJS Request END

  const [email, setemail] = useState("...");
  const [senha, setsenha] = useState("...");


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        {/* Titulo */}
        <Text style={styles.Title} adjustsFontSizeToFit={true}>
          User Register
        </Text>
        <View style={styles.circle}>
          {/* E-mail */}
          <TextInput
            placeholder="e-mail"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(addEmail) => setemail(addEmail)}
          />
          {/* Senha */}
          <TextInput
            placeholder="senha"
            style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            onChangeText={(addSenha) => setsenha(addSenha)}
          />
          {/* Botões */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              width: 200,
              justifyContent: "space-between",
            }}
          >
            {/* Cadastrar */}
            <Button
              title="Cadastrar"
              color="#06f"
              onPress={() => navigation.navigate('Cadastro')}
            />
            {/* Entrar */}
            <BtnComp
              text="Entrar"
              color={Colors.color}
              onPress={() => onEnter()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  Title: {
    color: "#555",
    fontSize: 65,
    marginBottom: 30,
    fontWeight: "bold",
    width: 300,
    textAlign: "center",
    lineHeight: 60,
  },
  circle: {
    paddingVertical: Platform.OS === "ios" ? 100 : 80,
    paddingHorizontal: 50,
    backgroundColor: "#555",
    borderRadius: 200,
    alignItems: "center",
  },
  label: {
    color: Colors.primary,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 250,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF9",
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
  },
});
