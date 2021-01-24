import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../Constants/Colors";
import Button from "../Components/Button";
import { NavigationHelpersContext } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
  const [imagem, setimagem] = useState(<Ionicons name="person-circle" size={150} color={Colors.primary} />);

  return (
    <View style={styles.screen}>
      {imagem}
      <Text style={styles.infoName}>Nome da Pessoa</Text>
      <Text style={styles.infoEmail}>e-mail</Text>
      <Button
        text="Editar"
        btnStyle={styles.button}
        color={Colors.color}
        btnMargin={{ marginTop: 50 }}
        onPress={() => navigation.navigate("Editar")}
      />
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
});
