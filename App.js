
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,} from 'react-native';
import estilo from './estilos/estilo.js';
import LP from './Componentes/LP'

export default function App() {
  const [ligado,setLigado]=useState()
  return (
    <View style={estilo.conteiner}>
      <ImageBackground 
       source={require('./assets/download.png')}
       style={estilos.imagemfundo}
      >
      <Text>Nova fase do Curso</Text>
      <LP/>
      </ImageBackground>
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 250,
    resizeMode:'contain'
  },
  imagemfundo:{
    flex: 1,
    resizeMode: 'cover',
  }
})