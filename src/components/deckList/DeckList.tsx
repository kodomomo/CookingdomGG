import React, { FC } from 'react';
import useDeckUseCase from '../../hooks/useCase/deck/useDeckUseCase';
import { deck } from '../../models/cookie';
import Deck from './deck';
import Header from './header';
import { CircularProgress } from '@material-ui/core';

interface Props {
  openDetailCookie: (value: string) => void;
}

const DeckList: FC<Props> = ({ openDetailCookie }) => {
  const { deck, deckType, setDeckType, loading } = useDeckUseCase();
  const renderDeck = (decks: deck[]) => {
    return decks.map((deck, index) => (
      <Deck
        cookieList={deck.cookie}
        treasureList={deck.treasure}
        key={index}
        openDetailCookie={openDetailCookie}
        substitution={deck.substitution}
      />
    ));
  };
  return (
    <div className='decklist__wrapper'>
      <Header deckType={deckType} setDeckType={setDeckType} />
      {loading ? <CircularProgress color='primary' /> : <div>{renderDeck(deck)}</div>}
    </div>
  );
};

export default DeckList;
