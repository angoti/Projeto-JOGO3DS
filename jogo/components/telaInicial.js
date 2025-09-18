import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function telaInicial() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <Text style={styles.paragraph}>Quiz Legal</Text>
      </View>

      <View style={styles.button2}>

        <TouchableOpacity
          style={styles.butaoInicial}
          onPress={() => irPara('fase1')}>
          <Text style={styles.butaoInicialTexto}>Jogar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.butaoInicial}>
          <Text style={styles.butaoInicialTexto}>Créditos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.butaoInicial}>
          <Text style={styles.butaoInicialTexto}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    height: 128,
    width: 128,
  },
  butaoInicial: {
    paddingVertical: 12,
    paddingHorizontal: '10%',
    borderRadius: 30,
    marginVertical: 10,
    backgroundColor: '#FFD700',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  },
  butaoInicialTexto: {
    color: 'black',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '15%',
  },
});
