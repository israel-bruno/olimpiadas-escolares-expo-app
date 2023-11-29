import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#51AFF3',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',

  },

  subtitle:{
    fontSize: 20,
    textAlign: 'center',

  },

  logoPrefeitura: {
    width: '60%',
    height: '60%',
    marginTop: 10,
    marginBottom: 10,
  },

  card: {
    marginBottom: 150,
    backgroundColor: '#fff',
    padding: 20,
  },

  input: {
    height: 'auto',
    width: 'auto',
    borderWidth: 1,
    borderColor: '#01A9DB',
    borderRadius: 5,
    marginTop: 1,
    padding: 10,
  },
  avatarUsuario: {
    height: 250,
    width: 250,

    borderRadius: 190,
    marginBottom: 20,
  },

  jogaDladinho: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  juntaAqui: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  poucoDeEspaco: {
    marginTop: 45,
    marginBottom: 45,
  },



  botao: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 58,
    borderRadius: 5,
    backgroundColor: '#0000CD',

    marginTop: 20,
    marginBottom: 20,
  },

  textoDoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },


});

export default styles;
