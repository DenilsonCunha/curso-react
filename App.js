
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import estilo from './estilos/estilo.js';
import LP from './Componentes/LP'

export default function App() {
  return (
    <View style={estilo.conteiner}>
      <Text>Nova fase do Curso</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  logo: {
    width: 250,
    resizeMode:'contain'
  }
})