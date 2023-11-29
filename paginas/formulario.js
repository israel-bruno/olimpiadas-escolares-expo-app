import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { data } from './data';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';

import stylesG from '../styles/styleGlobal';

import CabPrefeitura from '../components/CabPrefeituraLogo';

export default function SportsForm() {
  const [selectedValue, setSelectedValue] = useState('');

  const [turma, setNomeTurma] = useState('');

  const [nomeAtleta, setNomeAtleta] = useState('');
  const [idadeAtleta, setIdadeAtleta] = useState('');
  const [sexoAtleta, setSexoSelectedValue] = useState('');

  const [alturaAtleta, setAlturaAtleta] = useState('');
  const [pesoAtleta, setPesoAtleta] = useState('');

  const [modalidade, setModalidade] = useState(
    'Todos',
    'Futebol',
    'Volei',
    'Xadrez',
    'Basquete',
    'Handbol',
    'Truco',
    'Tenis',
    'Natação',
    'Corrida'
  );

  const handleSave = () => {
    alert(
      `Escola ${selectedValue} / Turma ${turma} / Aluno ${nomeAtleta} / Idade ${idadeAtleta} / Sexo ${sexoAtleta} / Altura ${alturaAtleta} / Peso ${pesoAtleta} / Modalidade ${modalidade}`
    );
    data.push({
      age: idadeAtleta,
      lastname: '',
      name: nomeAtleta,
      sport: modalidade,
      school: selectedValue,
      id: data.length + 1,
    });
    data.forEach((dado) => console.log(dado));
  };

  return (
    <View style={stylesG.container}>
      <CabPrefeitura />
      <ScrollView style={styles.scroll}>
        <Card containerStyle={styles.card}>
          <Text style={styles.title}>Registro do Atleta</Text>

          <Card.Divider />

          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(255, 255, 0, 0.3)' })
            }>
            <Text style={styles.subtitle}>📚 Escola 🏫</Text>

            <Text>Escola</Text>
            <View>
              <Picker
                selectedValue={selectedValue}
                style={styles.input}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="Unileste" value="Unileste" />
                <Picker.Item label="Escola 2" value="Escola 2" />
                <Picker.Item label="Escola 3" value="Escola 3" />
                <Picker.Item label="Escola 4" value="Escola 4" />
                <Picker.Item label="Escola 5" value="Escola 5" />
                <Picker.Item label="Escola 6" value="Escola 6" />
                <Picker.Item label="Escola 7" value="Escola 7" />
                <Picker.Item label="Escola 8" value="Escola 8" />
              </Picker>
            </View>

            <Text>Turma</Text>
            <TextInput
              style={styles.input}
              value={turma}
              onChangeText={(text) => setNomeTurma(text)}
            />
          </Card>

          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(128, 0, 128, 0.3)' })
            }>
            <Text style={styles.subtitle}>⛹️‍♀️ Atleta 🚴‍♂️</Text>

            <Text>Nome</Text>
            <TextInput
              style={styles.input}
              value={nomeAtleta}
              onChangeText={(text) => setNomeAtleta(text)}
            />

            <Text>Idade</Text>
            <TextInput
              style={styles.input}
              value={idadeAtleta}
              onChangeText={(text) => setIdadeAtleta(text)}
            />

            <Text>Sexo</Text>
            <View>
              <Picker
                selectedValue={sexoAtleta}
                style={styles.input}
                onValueChange={(itemValue) => setSexoSelectedValue(itemValue)}>
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </View>

            <Text>Altura</Text>
            <TextInput
              style={styles.input}
              value={alturaAtleta}
              onChangeText={(text) => setAlturaAtleta(text)}
            />

            <Text>Peso</Text>
            <TextInput
              style={styles.input}
              value={pesoAtleta}
              onChangeText={(text) => setPesoAtleta(text)}
            />
          </Card>

          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(0, 0, 255, 0.3)' })
            }>
            <Text style={styles.subtitle}>⚽🏀 Modalidade 🏐🎯</Text>
            <Text>Modalidade</Text>
            <Picker
              style={styles.input}
              selectedValue={modalidade}
              onValueChange={(itemValue) => setModalidade(itemValue)}>
              <Picker.Item label="Futebol⚽" value="Futebol" />
              <Picker.Item label="Volei🏐" value="Volei" />
              <Picker.Item label="Xadrez♟" value="Xadrez" />
              <Picker.Item label="Basquete🏀" value="Basquete" />
              <Picker.Item label="Handbol⚽" value="Handbol" />
              <Picker.Item label="Truco🃏" value="Truco" />
              <Picker.Item label="Tenis🥎" value="Tênis" />
              <Picker.Item label="Natação🏊‍♀️" value="Natação" />
              <Picker.Item label="Corrida🏃‍♂️" value="Corrida" />
            </Picker>
          </Card>

          <Card.Divider />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Confirmar Cadastro</Text>
          </TouchableOpacity>
        </Card>
        <View style={stylesG.poucoDeEspaco}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
