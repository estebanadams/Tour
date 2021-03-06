import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import renderItem from "./RenderItems";
import { carouselItems } from "../../../data";

let Caroussel = () => {
  let [activeIndex, setActveIndex] = useState(0);
  let carouselRef = useRef();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Caroussel;
