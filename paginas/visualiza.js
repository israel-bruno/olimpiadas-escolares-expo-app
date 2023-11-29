import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, FlatList, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { data } from './data.js';

import CabPrefeitura from '../components/CabPrefeituraLogo';

const Visualiza = () => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [esportes, setEsportes] = useState([
    "Todos",
    "Futebol",
    "Volei",
    "Xadrez",
    "Basquete",
    "Handbol",
    "Truco",
    "Tenis",
    "Natação",
    "Corrida"
  ]);
  const [esporteAtual, setEsporteAtual] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  function handleOpenModal(item) {
    setSelectedItem(item);
    setShowModal(true);
  }

  function handleLast() {
    setEsporteAtual((prevEsporte) =>
      prevEsporte === 0 ? esportes.length - 1 : prevEsporte - 1
    );
  }

  function handleNext() {
    setEsporteAtual((prevEsporte) =>
      prevEsporte === esportes.length - 1 ? 0 : prevEsporte + 1
    );
  }

  useEffect(() => {
    if (esportes[esporteAtual] === "Todos") {
      const filteredsearch = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.lastname.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredsearch);
    } else {
      const filtered = data.filter(
        (item) =>
          (item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.lastname.toLowerCase().includes(search.toLowerCase())) &&
          item.sport === esportes[esporteAtual]
      );
      setFilteredData(filtered);
    }
  }, [search, esporteAtual]);

  return (
    <View style={{ flex: 1, backgroundColor: '#51AFF3' }}>
    
      <CabPrefeitura/>

      <View style= {{paddingVertical: 30}}>
      </View>
      <Text style={{ fontFamily: 'Verdana', fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Atletas</Text>
      <Text style={{ fontFamily: 'Verdana', fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>registrados</Text>

      

      <View style={{ flexDirection: 'row', justifyContent: 'center' , paddingTop: 40}}>
        <TouchableOpacity
          id="btnLast"
          style={{
            height: 45,
            backgroundColor: '#51AFF3',
            borderRadius: 7,
            borderColor: '#2759A4',
            marginRight: 55,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={handleLast}
        >
          <Image
            source={require('../assets/left.png')}
            style={{ width: 30, height: 30, borderRadius: 3 }}
          />
        </TouchableOpacity>

        <Text id="titEsporte" style={{ fontFamily: 'Verdana', fontSize: 20, fontWeight: 'bold', color: 'white', paddingVertical: 10 }}>{esportes[esporteAtual]}</Text>

        <TouchableOpacity
          id="btnNext"
          style={{
            height: 45,
            backgroundColor: '#51AFF3',
            borderRadius: 7,
            borderColor: '#2759A4',
            marginLeft: 55,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleNext}
        >
          <Image
            source={require('../assets/right.png')}
            style={{ width: 30, height: 30, borderRadius: 3 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 20, paddingVertical: 20 }}>
        <TextInput
          style={{
            borderRadius: 7,
            height: 30,
            width: 250,
            marginBottom: 20,
            backgroundColor: '#FFF',
            fontSize: 16,
            placeholderTextColor: '#CCCCCC',
            shadowColor: '#000000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 2,
          }}
          onChangeText={(text) => setSearch(text)}
          placeholder="Pesquisar"
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ borderTopColor: '#CCCCCC', borderTopWidth: 1 }}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleOpenModal(item)}
                style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}
              >
                <TouchableOpacity
                  id="btnModal"
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: '#51AFF3',
                    borderRadius: 20,
                    borderColor: '#51AFF3',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10
                  }}
                >
                  <Image
                    source={require('../assets/olhobom.png')}
                    style={{ width: 20, height: 20, tintColor: '#2759A4' }}
                  />
                </TouchableOpacity>
                <Text style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10 }}>{item.id}</Text>
                <Text style={{ flex: 3, paddingVertical: 10 }}>{item.name + ' ' + item.lastname}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      {showModal && (
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          transparent={true}
          animationType="fade"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                backgroundColor: '#FFF',
                borderRadius: 10,
                padding: 20,
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {selectedItem && (
                <>
                  <Text>ID: {selectedItem.id}</Text>
                  <Text>Nome: {selectedItem.name + ' ' + selectedItem.lastname}</Text>
                  <Text>Idade: {selectedItem.age}</Text>
                  <Text>Esporte: {selectedItem.sport}</Text>
                  <Text>Escola: {selectedItem.school}</Text>
                </>
              )}
              <TouchableOpacity
                style={{
                  backgroundColor: '#51AFF3',
                  borderRadius: 7,
                  borderColor: '#2759A4',
                  width: 100,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20
                }}
                onPress={() => setShowModal(false)}
              >
                <Text style={{ color: '#FFF' }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Visualiza;
