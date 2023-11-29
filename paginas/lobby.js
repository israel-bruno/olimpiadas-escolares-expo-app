import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper/src";

const { width } = Dimensions.get("window");

import CabPrefeituraLogo from "../components/CabPrefeituraLogo";

import esporte1 from "../assets/esporte1.jpg";
import esporte2 from "../assets/esporte2.jpg";
import esporte3 from "../assets/esporte3.jpg";
import esporte4 from "../assets/esporte4.jpg";
import esporte5 from "../assets/esporte5.jpg";

export default function Lobby() {
  return (
    <View style={styles.container}>
      <CabPrefeituraLogo />

      <Swiper style={styles.wrapper} autoplay={true} dotColor="#4682B4" activeDotColor="blue">
        <View style={styles.slide}>
          <Image source={esporte1} style={styles.image} />
        </View>

        <View style={styles.slide}>
          <Image source={esporte2} style={styles.image} />
        </View>

        <View style={styles.slide}>
          <Image source={esporte3} style={styles.image} />
        </View>

        <View style={styles.slide}>
          <Image source={esporte4} style={styles.image} />
        </View>

        <View style={styles.slide}>
          <Image source={esporte5} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 100,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
