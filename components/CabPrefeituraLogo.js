import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width , height } = Dimensions.get('window');

const CabPrefeituraLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LogoPrefeituraV2.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.16,
    backgroundColor: '#4682B4',
  },
  image: {
    
    width: width * 0.5 ,
    height: '100%',

    marginBottom: 50,
    marginTop: 80 ,
  },
});

export default CabPrefeituraLogo;