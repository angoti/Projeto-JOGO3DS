import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';

export default function telaInicial() {
  return (
    <View style={styles.container}>
    
    <View style={styles.banner}>
     <Image style={styles.logo} source={require('../assets/logo.jpg')} />
      <Text style={styles.paragraph}>
      Quiz Legal 1
      </Text>
      </View>

 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'black',
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color:'red',
  },
  logo: {
    height: 128,
    width: 128,
  },
  butaoInicial: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical:10 ,
    backgroundColor:'yellow',
    
  },
  butaoInicialTexto:{
    color:'brown',
    fontSize:30,
    fontWeight: 'bold',
  },
  banner:{
    flexDirection: 'row',   
    alignItems: 'center',  
    marginBottom: 20,
    marginRight:'15%',
    

  }
});
