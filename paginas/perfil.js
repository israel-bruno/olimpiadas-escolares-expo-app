import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import CabPrefeitura from "../components/CabPrefeituraLogo";
import { logout } from "../http/axios";
import stylesG from "../styles/styleGlobal";
import axios from "../http/axios";

export default function Perfil({ navigation }) {
  let [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("/me")
        .then((response) => {
          setUser(response.data.data);
        })
        .catch((err) => console.log(err.response?.message));
    };
    if (!user.id) fetchUser();
  }, [user]);

  return (
    <View style={stylesG.container}>
      <CabPrefeitura />
      <View style={styles.poucoDeEspaco}></View>
      <Card containerStyle={stylesG.card}>
        <View style={stylesG.jogaDladinho}>
          <Image source={{ uri: require("../assets/user-icon.png") }} style={stylesG.avatarUsuario} />
        </View>

        <Text style={styles.identificacao}>{user.name}</Text>
        <Card.Divider />

        <TouchableOpacity style={styles.botao} onPress={logout}>
          <Text style={stylesG.textoDoBotao}>logout</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    justifyContent: "center",
    width: "100%",
    height: 58,
    borderRadius: 5,
    backgroundColor: "red",

    marginTop: 20,
    marginBottom: 20,
  },

  identificacao: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",

    marginTop: -5,
    marginBottom: 20,
  },
});
