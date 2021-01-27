import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import Colors from "../Constants/Colors";
import Button from "../Components/Button";
import { TextInput } from "react-native-gesture-handler";

import api from "../service";

const AlterarSenhaScreen = ({ navigation }) => {
  // NodeJS Request
  const [novaSenha, setnovaSenha] = useState("");
  const [senhaAntiga, setsenhaAntiga] = useState("");
  const [senhaGet, setsenhaGet] = useState("");

  const [getInfo, setgetInfo] = useState(true);

  // GET
  const database = () => {
    api
      .get("1")
      .then((response) => {
        setsenhaGet(response.data["senha"]);
      })
      .then(() => {
        if (senhaAntiga != senhaGet) {
          Alert.alert("Aviso", "Erro ao digitar senha antiga.");
        } else {
          editDatabase();
          Alert.alert("Alteração concluída", "Senha alterada com sucesso.");
          navigation.navigate("Editar");
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  // PATCH
  const editDatabase = () => {
    api
      .patch("1", { senha: novaSenha })
      .then(() => {
        setsenhaGet(null);
        setsenhaAntiga(null);
      })
      .then(navigation.navigate("Perfil"));
  };

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
              onChangeText={(oldPsswd) => setsenhaAntiga(oldPsswd)}
              value={senhaAntiga}
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
              onChangeText={(addNewPsswd) => setnovaSenha(addNewPsswd)}
              value={novaSenha}
            />
          </View>
          <Button
            text="Salvar"
            btnStyle={styles.button}
            color={Colors.color}
            btnMargin={{ marginTop: 50 }}
            onPress={() => database()}
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
    fontSize: Platform.OS === "ios" ? 20 : 15,
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
