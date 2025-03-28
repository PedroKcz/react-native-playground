import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const generateCards = () => {
  const items = ['🍎', '🥐', '🍇', '🍓', '🍍', '🥝'];
  const pairs = [...items, ...items];
  return pairs.sort(() => Math.random() - 0.5);
};

const PairsGameScreen = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const handleCardPress = (index: number) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
    }
  };

  const renderCard = ({ item, index }: { item: string; index: number }) => {
    const isFlipped =
      flippedCards.includes(index) || matchedCards.includes(index);
    return (
      <TouchableOpacity
        style={[styles.card, isFlipped && styles.flippedCard]}
        onPress={() => handleCardPress(index)}
        disabled={isFlipped}
      >
        <Text style={styles.cardText}>{isFlipped ? item : '?'}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      Alert.alert('You matched all pairs! 🎉');
      setCards(generateCards());
      setMatchedCards([]);
      setFlippedCards([]);
    }
  }, [matchedCards]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pairs Memory Game</Text>
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default PairsGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  card: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  flippedCard: {
    backgroundColor: '#4caf50',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
