import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../Constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: props.color,
        ...props.btnMargin,
      }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
  },
});
