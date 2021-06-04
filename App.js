import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const resultado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput keyboardType='decimal-pad' placeholder="Digite seu peso" style={styles.input} value={peso} onChangeText={setPeso}></TextInput>
      <TextInput keyboardType='decimal-pad' placeholder="Digite sua altura" style={styles.input} value={altura} onChangeText={setAltura}></TextInput>
      <Text style={styles.resultado}>Resultado</Text>
      
      <Text style={styles.countText}>
        {resultado ? resultado : null}
      </Text>

      <View style={styles.table}>
        <Text>
          Baixo peso muito grave = abaixo de 16.{"\n"}
          Baixo peso grave = entre 16 e 16,99.{"\n"}
          Baixo peso = entre 17 e 18,49.{"\n"}
          Peso normal = entre 18,50 e 24,99.{"\n"}
          Sobrepeso = entre 25 e 29,99.{"\n"}
          Obesidade grau I = entre 30 e 34,99.{"\n"}
          Obesidade grau II = entre 35 e 39,99.{"\n"}
          Obesidade grau III (obesidade mórbida) = maior que 40.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    marginTop: 30,
    backgroundColor: '#dddddf',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '100',
  },
  resultado: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    height: 50,
    backgroundColor: '#dddddf',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '100',
    textAlign: 'center',
  },
});
