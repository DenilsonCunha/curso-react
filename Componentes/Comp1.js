import React from 'react';
import {StyleSheet, Text} from 'react-native';
import estilo from '../estilos/estilo.js';

export default function(props){
    return(
        <Text style={estilo.textCursos}>Olá, Bem Vindo! {props.aluno}</Text>
    )
}
