import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Poppins_900Black } from '@expo-google-fonts/poppins/900Black';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_900Black,
  });
  const [number, onChangeNumber] = useState('');
  const mapa = require('./assets/pernam.png');

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.cima} />
        <View style={styles.meio}>
          <Image source={mapa} resizeMode="contain" style={{ width: '90%', height:'70%' }} />

          <View style={styles.insiraNome}>
            <Text style={styles.textos}>
              Insira abaixo o nome do estado em verde:
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.baixo}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c498',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'space-between',
  },
  cima: {
    backgroundColor: '#0d3528',
    height: '10%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'orange',
  },
  meio: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  baixo: {
    backgroundColor: '#0d3528',
    height: '10%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'yellow',
  },

  insiraNome: {
    backgroundColor: '#134c28',
    height: 40,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textos: {
    color: 'white',
    fontFamily: 'Poppins_700Bold',
    fontStyle: 'bold',
  },
  input: {
    height: '10%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
