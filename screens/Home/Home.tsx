import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import Caroussel from "./components/Caroussel";
import H1 from "../../components/H1";

let HomeScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={{ flex: 1 }}>
      <H1
        color="black"
        text="Retrouver les meilleursses Tours proche de votre position"
      ></H1>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}>
        <View>
          <Text>Blabla</Text>
        </View>
      </Modalize>
      {/* <Caroussel></Caroussel> */}
    </View>
  );
};

export default HomeScreen;
