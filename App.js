
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,} from 'react-native';
import estilo from './estilos/estilo.js';
import LP from './Componentes/LP'

export default function App() {
  const [ligado,setLigado]=useState(true)
  return (
    <View style={estilo.conteiner}>
      {ligado?
      <View>
      <ImageBackground 
       source={require('./assets/download.png')}
       style={estilos.imagemfundo}
      >
      <Text>Nova fase do Curso</Text>
      <LP/>
      </ImageBackground>
    </View>
    :
    <Text>* * *</Text>
      }
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