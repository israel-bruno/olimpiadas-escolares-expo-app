import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import CabPrefeitura from "../components/CabPrefeituraLogo";
import { logout } from "../http/axios";
import stylesG from "../styles/styleGlobal";

export default function Perfil({ navigation }) {
  const usuario = "Administrador(a)";
  return (
    <View style={stylesG.container}>
      <CabPrefeitura />
      <View style={styles.poucoDeEspaco}></View>
      <Card containerStyle={stylesG.card}>
        <View style={stylesG.jogaDladinho}>
          <Image source={{ uri: require("../assets/user-icon.png") }} style={stylesG.avatarUsuario} />
        </View>

        <Text style={styles.identificacao}>{usuario}</Text>
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
