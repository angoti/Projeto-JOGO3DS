import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Cell({
  colIndex,
  rowIndex,
  value,
  selectedCell,
  setSelectedCell,
  celulasEditaveis,
}) {
  const isSelected =
    selectedCell.row === rowIndex && selectedCell.col === colIndex;
  function isLeftBorder(colIndex) {
    if (colIndex === 0 || colIndex === 3 || colIndex === 6) return true;
  }
  function isRightBorder(colIndex) {
    if (colIndex === 2 || colIndex === 5 || colIndex === 8) return true;
  }
  function isTopBorder(rowIndex) {
    if (rowIndex === 0 || rowIndex === 3 || rowIndex === 6) return true;
  }
  function isBottomBorder(rowIndex) {
    if (rowIndex === 2 || rowIndex === 5 || rowIndex === 8) return true;
  }

  function isEditavel() {
    return celulasEditaveis?.some(
      (c) => c.row === rowIndex && c.col === colIndex
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.celula,
        isSelected && styles.celulaSelecionada,
        {
          borderLeftWidth: isLeftBorder(colIndex) ? 2 : 1,
          borderRightWidth: isRightBorder(colIndex) ? 2 : 1,
          borderTopWidth: isTopBorder(rowIndex) ? 2 : 1,
          borderBottomWidth: isBottomBorder(rowIndex) ? 2 : 1,
        },
      ]}
      onPress={() => setSelectedCell({ row: rowIndex, col: colIndex })}>
      <Text
        style={[
          styles.texto,
          isSelected ? styles.textoSelecionado : styles.textoNormal,
        ]}>
        {isEditavel() ? '' : value}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  celula: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#006d77',
  },
  celulaNormal: { backgroundColor: '#e29578' },
  celulaSelecionada: { backgroundColor: '#C47C62' },
  texto: {
    fontSize: 25,
    color: '#006d77',
    fontWeight: 'bold',
  },
  textoNormal: { color: '#006D77' },
  textoSelecionado: { color: '#83C5BE' },
});
