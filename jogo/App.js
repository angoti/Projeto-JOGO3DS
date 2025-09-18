import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Alert, Platform, BackHandler } from "react-native";
import { Card } from 'react-native-paper';



import AssetExample from './components/telaInicial';

import teste from './components/fase1';

export default function App() {

  const [tela,setTela] = useState('inicio');

  const irPara = (nomeTela) => setTela(nomeTela);

  const sair = () => {
    if (Platform.OS === "android") {
      BackHandler.exitApp();
    } else {
      Alert.alert(
        "Sair",
        "Em iOS os apps não devem ser encerrados programaticamente.",
        [{ text: "OK" }]
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      
      {tela === "inicio" &&(
        <View>
     <Card>
        <AssetExample />
      </Card>
        </View>
      )}

       {tela === "fase1" && (
        <View style={styles.box}>
          <Card>
        <AssetExample />
      </Card>
        </View>
      )}

      {tela === "creditos" && (
        <View style={styles.box}>
          <Header titulo="Créditos" />
          <Text style={styles.texto}>
            • Desenvolvido por Você{"\n"}
            • Curso: Dispositivos Móveis{"\n"}
            • Tecnologias: React Native + Expo
          </Text>
          <Botao label="Voltar" onPress={() => irPara("inicio")} />
        </View>
      )}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
