import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  DevSettings,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../Constants/Colors";
import BtnComp from "../Components/Button";

import api from "../service";

const ProfileScreen = ({ navigation }) => {
  // NodeJS Request
  const [nome, setnome] = useState("Nome da Pessoa");
  const [email, setemail] = useState("e-mail");
  const [foto, setfoto] = useState(null);
  const [profileImg, setprofileImg] = useState(imagem);

  const dbConsult = () => {
    api
      .get("1")
      .then((response) => {
        setnome(response.data["nome"]);
        setemail(response.data["email"]);
        setfoto(response.data["foto"]);
        if (foto != null) {
          setprofileImg(foto);
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  setInterval(dbConsult, 1000);
  // NodeJS Request END

  const imagem = (
    <Ionicons name="person-circle" size={150} color={Colors.primary} />
  );

  return (
    <View style={styles.screen}>
      {/* Imagem perfil */}
      <View style={styles.picture}>
        {dbConsult}
        <Image
          source={{ uri: profileImg }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      {/* Informações */}
      <Text style={styles.infoName}>{nome}</Text>
      <Text style={styles.infoEmail}>{email}</Text>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 20,
  },
  sairBtn: {
    width: 100,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});
