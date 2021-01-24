import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import Colors from "../Constants/Colors";
import Button from "../Components/Button";
import {
  TextInput,
} from "react-native-gesture-handler";

const AlterarSenhaScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <View style={styles.screen}>
          {/* Nome */}
          <View style={styles.box}>
            <Text style={styles.label}>Senha antiga</Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              placeholder="****"
              secureTextEntry={true}
            />
          </View>
          {/* E-Mail */}
          <View style={styles.box}>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              placeholder="****"
              secureTextEntry={true}
            />
          </View>
          <Button
            text="Salvar"
            btnStyle={styles.button}
            color={Colors.color}
            btnMargin={{ marginTop: 50 }}
            onPress={() => navigation.navigate("Perfil")}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AlterarSenhaScreen;

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
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFF5",
    borderRadius: 10,
    fontSize: Platform.OS === "ios" ? 20 : 15
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
