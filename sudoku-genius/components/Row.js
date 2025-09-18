import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

export default function Row({ rowIndex, rowValue, selectedCell, setSelectedCell }) {

  return (
    <View style={styles.row}>
      {Array.from({ length: 9 }).map((_, cellIndex) => (
        <Cell
          key={cellIndex}
          colIndex={cellIndex}
          rowIndex={rowIndex}
          value={rowValue[cellIndex]}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 0,
  },
});
