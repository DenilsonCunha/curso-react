import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import Caixas from './Componentes/caixas'
import estilo from './estilos/estilo.js';


export default function App() {
  let vexibir=true;
  return (
    <View style={estilo.conteiner}>
      <Button
      title="Mensagem"
      onPress={()=>Alert.alert('OLÁ')}
      />
      <Image
          source={require('./assets/download.png')}
          style={estilos.logo}
      />
      <Caixas exibir={vexibir}/>
      {vexibir?<Text>Você está aprendendo react native</Text>:<Text>----</Text>}
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 250,
    resizeMode:'contain'
  }
})