import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Colors from "../Constants/Colors";
import Button from "../Components/Button";

const LoginScreen = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <Text style={styles.Title} adjustsFontSizeToFit={true}>
          User Register
        </Text>
        <View style={styles.circle}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            placeholder="e-mail"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="senha"
            style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
          />
          <Button
            text="Entrar"
            color={Colors.color}
            btnMargin={styles.button}
            onPress={props.onEnter}
          />
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
    paddingVertical: Platform.OS === "ios" ? 80 : 60,
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
