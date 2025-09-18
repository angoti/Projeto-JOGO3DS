import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import Card from './components/Card';

// Importe as imagens das frutas
const fruitImages = [
  { id: 1, image: require('./assets/apple.png') },
  { id: 2, image: require('./assets/banana.png') },
  { id: 3, image: require('./assets/grape.png') },
  { id: 4, image: require('./assets/orange.png') },
  { id: 5, image: require('./assets/strawberry.png') },
  { id: 6, image: require('./assets/watermelon.png') },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  // Função para embaralhar as cartas
  const shuffleCards = () => {
    const duplicatedCards = [...fruitImages, ...fruitImages].map((card, index) => ({
      ...card,
      uniqueId: index, // Adiciona um ID único para cada carta, necessário para o FlatList.
      isFlipped: false,
    }));
    duplicatedCards.sort(() => Math.random() - 0.5); // Algoritmo simples de embaralhamento.
    setCards(duplicatedCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  // Inicializa o jogo ao carregar o componente
  useEffect(() => {
    shuffleCards();
  }, []);

  // UseEffect para verificar se as duas cartas viradas são um par
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      setMoves(m => m + 1); // Incrementa os movimentos
      if (card1.id === card2.id) {
        // Se for um par, adiciona ao array de cartas combinadas
        setMatchedCards(m => [...m, card1.id]);
        setFlippedCards([]);
      } else {
        // Se não for um par, vira as cartas de volta após um tempo
        const timer = setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(c => {
              if (c.uniqueId === card1.uniqueId || c.uniqueId === card2.uniqueId) {
                return { ...c, isFlipped: false };
              }
              return c;
            })
          );
          setFlippedCards([]);
        }, 1000); // 1 segundo para o usuário ver as cartas
        return () => clearTimeout(timer);
      }
    }
  }, [flippedCards]);

  // UseEffect para verificar se o jogo acabou
  useEffect(() => {
    if (matchedCards.length === fruitImages.length) {
      Alert.alert('Parabéns!', `Você completou o jogo em ${moves} movimentos!`, [
        { text: 'Jogar Novamente', onPress: shuffleCards },
      ]);
    }
  }, [matchedCards, moves]);

  // Lógica para lidar com o clique em uma carta
  const handleCardPress = (card) => {
    if (flippedCards.length < 2) {
      setFlippedCards(f => [...f, card]);
      setCards(prevCards =>
        prevCards.map(c => (c.uniqueId === card.uniqueId ? { ...c, isFlipped: true } : c))
      );
    }
  };

  const renderItem = ({ item }) => (
    <Card
      card={item}
      isFlipped={item.isFlipped}
      isMatched={matchedCards.includes(item.id)}
      onPress={() => handleCardPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Memória</Text>
      <Text style={styles.movesText}>Movimentos: {moves}</Text>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={item => item.uniqueId.toString()}
        numColumns={4}
        contentContainerStyle={styles.cardList}
      />
      <Button title="Embaralhar de novo" onPress={shuffleCards} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movesText: {
    fontSize: 20,
    marginBottom: 10,
  },
  cardList: {
    alignItems: 'center',
  },
});

export default App;