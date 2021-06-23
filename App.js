
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,} from 'react-native';
import estilo from './estilos/estilo.js';
import LP from './Componentes/LP'

export default function App() {

  const [ligado,setLigado]=useState(true)
  return (

    <View style={estilo.conteiner}>
      <Button
      title={ligado?'Desligar':'Ligar'}
      onPress={()=>setLigado(!ligado)}
      />
      {ligado?
      <View>
      <Text>Nova Fase do Curso</Text>
      <CarroC nome='Golf'/>
      <LP/>
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