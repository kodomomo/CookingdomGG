import { useState } from 'react';
import { deck, type } from '../../../models/cookie';

const useDeck = () => {
  const [deck, setDeck] = useState<deck[]>([]);
  const [deckType, setDeckType] = useState<type>('PVE');
  return {
    deck,
    setDeck,
    deckType,
    setDeckType,
  };
};

export default useDeck;
