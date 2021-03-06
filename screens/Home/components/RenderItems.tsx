import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";

let renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        height: 400,
        marginLeft: 25,
        marginRight: 2,
      }}
    >
      <Image
        style={{
          height: 400,
          borderRadius: 10,
        }}
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
      ></Image>
      <View
        style={{
          top: -100,
          padding: 20,
          backgroundColor: "rgba(52, 52, 52, 0.4)",
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
          }}
        >
          {item.title}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>{item.text}</Text>
          <Text style={{ color: "white" }}>****</Text>
        </View>
      </View>
    </View>
  );
};

export default renderItem;
