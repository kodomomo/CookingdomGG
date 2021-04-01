import { useEffect } from 'react';
import { getAllDeck, getTypeDeck } from '../../api/deck/deckApi';
import useDeck from '../../domain/deck/useDeck';

const useDeckUseCase = () => {
  const { deck, setDeck, deckType, setDeckType } = useDeck();
  const getDeckAndSetState = async () => {
    const data = await getTypeDeck(deckType);
    setDeck(data);
  };
  const getAllDeckAndSetState = async () => {
    const data = await getAllDeck();
    setDeck(data);
  };
  useEffect(() => {
    if (deckType === 'ALL') getAllDeckAndSetState();
    else getDeckAndSetState();
  }, [deckType]);

  return {
    deck,
    setDeck,
    deckType,
    setDeckType,
  };
};

export default useDeckUseCase;
