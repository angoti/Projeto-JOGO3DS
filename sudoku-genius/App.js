import { Text, View, StyleSheet } from 'react-native';
import Cell from './components/Cell';
import Table from './components/Table'

export default function App() {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e29578',
    padding: 8,
    alignItems: 'center',
  },
  paragrafo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
