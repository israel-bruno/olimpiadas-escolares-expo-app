import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

import CabPrefeitura from '../components/CabPrefeituraLogo';

import stylesG from '../styles/styleGlobal';

export default function Perfil({ navigation }) {
  const usuario = 'Administrador(a)';

  const Sair = () => {
    navigation.navigate('login'); // Navegar para a tela de login
  };

  return (
   
    <View style={stylesG.container}>
      <CabPrefeitura />
      <View style={styles.poucoDeEspaco}></View>
      <Card containerStyle={stylesG.card}>
        <View style={stylesG.jogaDladinho}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={stylesG.avatarUsuario}
          />
        </View>

        <Text style={styles.identificacao}>{usuario}</Text>
        <Card.Divider />

        <TouchableOpacity style={styles.botao} onPress={Sair}>
          <Text style={stylesG.textoDoBotao}>logout</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    justifyContent: 'center',
    width: '100%',
    height: 58,
    borderRadius: 5,
    backgroundColor: 'red',

    marginTop: 20,
    marginBottom: 20,
  },

  identificacao: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: -5,
    marginBottom: 20,
  },
});
