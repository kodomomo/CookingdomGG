import { useEffect } from 'react';
import { getTypeDeck } from '../../api/deck/deckApi';
import useDeck from '../../domain/deck/useDeck';

const useDeckUseCase = () => {
  const { deck, setDeck, deckType, setDeckType } = useDeck();
  const getDeckAndSetState = async () => {
    const data = await getTypeDeck(deckType);
    setDeck(data);
  };
  useEffect(() => {
    getDeckAndSetState();
  }, [deckType]);

  return {
    deck,
    setDeck,
    deckType,
    setDeckType,
  };
};

export default useDeckUseCase;
