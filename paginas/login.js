import React, { useState } from "react";
import { TextInput, SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
const avatar = require("../assets/logoEmblema.png");
import axios from "../http/axios";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const ExisteEsseUsuario = async () => {
    if (!usuario || !senha) return;
    await axios
      .post("/login", { username: usuario, password: senha })
      .then((response) => {
        axios.defaults.headers["Authorization"] = response.data.data.access_token;
        localStorage.setItem("api-token", response.data.data.access_token);
        navigation.navigate("Rotas");
      })
      .catch((error) => alert(error?.response?.data?.error ?? "Usuário ou senha inválido"));
  };

  return (
    <SafeAreaView style={stylesG.container}>
      <ScrollView>
        <View style={stylesG.view}>
          <Image source={avatar} style={stylesG.logoPrefeitura} />
        </View>

        <Text style={stylesG.text}>Email</Text>
        <TextInput type="Text" placeholder="Email" style={stylesG.Input} value={usuario} onChangeText={setUsuario}></TextInput>
        <Text style={stylesG.text}>Senha</Text>
        <TextInput style={stylesG.Input} value={senha} secureTextEntry={true} onChangeText={setSenha} placeholder="Senha"></TextInput>

        <TouchableOpacity style={stylesG.botao} onPress={ExisteEsseUsuario}>
          <Text style={stylesG.textoDoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={stylesG.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesG = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },

  view: {
    flex: 1,
    justifyContent: "flex",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 30,
  },

  logoPrefeitura: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  text: {
    fontWeight: "bold",
    padding: 5,
    marginTop: 5,
  },

  Input: {
    height: 50,
    width: "auto",
    borderWidth: 1,
    borderColor: "#01A9DB",
    borderRadius: 5,
    padding: 5,
  },

  botao: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "blue",
    marginTop: 25,
    marginBottom: 5,
  },

  textoDoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  linkText: {
    color: "blue",
    marginVertical: 0,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
