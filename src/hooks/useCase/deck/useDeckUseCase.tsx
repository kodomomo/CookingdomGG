import { useEffect } from 'react';
import { getAllDeck, getTypeDeck } from '../../api/deck/deckApi';
import useDeck from '../../domain/deck/useDeck';
import useLoading from '../../domain/loading/useLoading';

const useDeckUseCase = () => {
  const { deck, setDeck, deckType, setDeckType } = useDeck();
  const { loading, requestWrapper } = useLoading();
  const getDeckAndSetState = requestWrapper(async () => {
    const data = await getTypeDeck(deckType);
    setDeck(data);
  });
  const getAllDeckAndSetState = requestWrapper(async () => {
    const data = await getAllDeck();
    setDeck(data);
  });
  useEffect(() => {
    if (deckType === 'ALL') getAllDeckAndSetState();
    else getDeckAndSetState();
  }, [deckType]);

  return {
    deck,
    setDeck,
    deckType,
    setDeckType,
    loading,
  };
};

export default useDeckUseCase;
