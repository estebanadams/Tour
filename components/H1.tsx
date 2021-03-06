import React from "react";
import { View, Text } from "react-native";

let H1 = ({ text, color }) => {
  let style = {
    container: {
      width: "100%",
      padding: 20,
      paddingTop: 60,
      paddingBottom: 10,
      backgroundColor: "white",
    },
    text: {
      fontSize: 24,
      fontWeight: "700",
      color: color,
    },
  };
  return (
    <View style={style.container}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default H1;
