import React, { FC } from 'react';
import useDeckUseCase from '../../hooks/useCase/deck/useDeckUseCase';
import { deck } from '../../models/cookie';
import Deck from './deck';
import Header from './header';

const DeckList: FC = () => {
  const { deck, deckType, setDeckType } = useDeckUseCase();
  const renderDeck = (decks: deck[]) => {
    return decks.map((deck, index) => (
      <Deck cookieList={deck.cookie} treasureList={deck.treasure} key={index} />
    ));
  };
  return (
    <div className='decklist__wrapper'>
      <Header deckType={deckType} setDeckType={setDeckType} />
      <div>{renderDeck(deck)}</div>
    </div>
  );
};

export default DeckList;
