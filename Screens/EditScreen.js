import React, { useState, useEffect } from "react";
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
  Image,
} from "react-native";
import Colors from "../Constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import BtnComp from "../Components/Button";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

import api from "../service";

const EditScreen = ({ navigation }, props) => {
  // NodeJS Request
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");

  const [getInfo, setgetInfo] = useState(true);

  // GET
  const database = () => {
    api
      .get("1")
      .then((response) => {
        setImage(response.data["foto"]);
        setnome(response.data["nome"]);
        setemail(response.data["email"]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  // PATCH
  const editDatabase = () => {
    api
      .patch("1", { nome: nome, email: email, foto: image })
      .then(navigation.navigate("Perfil"));
  };

  // DELETE
  const deleteAccount = () => {
    api.delete("1").then(DevSettings.reload());
  };

  const getFromDatabase = () => {
    if (getInfo === true) {
      database();
      setgetInfo(false);
    } else {
      return;
    }
  };
  // NodeJS Request END



  // Escolher foto
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Neccesita da permissão de acesso ao rolo da câmera para funcionar."
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  const changeName = (addNome) => {
    setnome(addNome);
  };

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
          onPress: () => deleteAccount(),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        {getFromDatabase()}
        {/* {imagem} */}
        <Button title="Escolher imagem da galeria" color="grey" onPress={pickImage} />
        {image && (
          <View style={styles.picture}>
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
        {/* Nome */}
        <View style={styles.box}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: João da Silva Santos"
            value={nome}
            onChangeText={changeName}
          />
        </View>
        {/* E-Mail */}
        <View style={styles.box}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Ex.: joaodasilva@site.com"
            value={email}
          />
        </View>
        {/* Alterar Senha */}
        <View style={{ ...styles.box, marginTop: 30 }}>
          <Button
            title="Alterar senha"
            onPress={() => navigation.navigate("Alterar senha")}
          />
        </View>
        {/* Botões */}
        <View
          style={{
            ...styles.box,
            flexDirection: "row",
            marginTop: 50,
            width: 300,
            justifyContent: "space-around",
          }}
        >
          <BtnComp
            text="Excluir"
            btnStyle={styles.button}
            color="red"
            onPress={() => excluirConta()}
          />
          <BtnComp
            text="Salvar"
            btnStyle={styles.button}
            color={Colors.color}
            onPress={() => editDatabase()}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default EditScreen;

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
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 20
  },
  box: {
    alignItems: "center",
    margin: 10,
  },
});
