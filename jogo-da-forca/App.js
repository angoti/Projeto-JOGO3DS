import { 
  View, 
  Pressable, 
  Image, 
  StyleSheet, 
  Text, 
  SafeAreaView 
} from 'react-native';

function App() {
  // Imagem do fundo (só usada na tela inicial)
  const fundo = require('./assets/startmar.png');
  // Imagem do papagaio
  const papagaio = require('./assets/papagaio.png');

  // Componente Botão
  const Botao = ({ label, onPress }) => (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]} 
      onPress={onPress}
    >
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Fundo da tela inicial */}
      <Image style={styles.imagem} source={fundo} resizeMode="cover" />

      {/* Container do título */}
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo1}>CONDRIFORK</Text>
      </View>

      {/* Container do botão e do papagaio */}
      <View style={styles.containerBotaoPapagaio}>
        <Image source={papagaio} style={styles.imagemPapagaio} />
        <Botao label="Iniciar" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitulo: {
    marginTop: 150,
    alignItems: 'center',
  },
  containerBotaoPapagaio: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0,
  },
  imagem: {
    width: '150%',
    height: '150%',
    position: 'absolute',
    top: 0,
    left: -47,
  },
  btn: {
  paddingVertical: 10, paddingHorizontal: 55, borderRadius: 40, backgroundColor: '#4682B4', alignItems: 'center', justifyContent: 'center', top: 100,
  },
  btnPressed: {
    backgroundColor: '#315f7a',
  },
  btnText: {
   fontSize: 30, color: '#fff', fontWeight: 'bold',
  },
  titulo1: {
   fontSize: 30, lineHeight: 140, fontWeight: 'bold', letterSpacing: 0.25, color: 'white', textAlign: 'center',
  },
  imagemPapagaio: {
  position: 'absolute', top: 8, left: 143, width: 63, height: 125, 
  },
});

export default App;
