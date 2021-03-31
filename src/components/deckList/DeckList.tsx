import React, { FC } from 'react';
import useDeckUseCase from '../../hooks/useCase/deck/useDeckUseCase';
import { deck } from '../../models/cookie';
import Deck from './deck';

const DeckList: FC = () => {
  const { deck, deckType, setDeckType } = useDeckUseCase();
  const renderDeck = (decks: deck[]) => {
    return decks.map(deck => <Deck cookieList={deck.cookie} treasureList={deck.treasure} />);
  };
  return (
    <div className='decklist__wrapper'>
      <div>{renderDeck(deck)}</div>
    </div>
  );
};

export default DeckList;
