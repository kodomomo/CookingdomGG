import React, { FC } from 'react';
import DeckList from '../components/deckList';

interface Props {
  openDetailCookie: (value: string) => void;
  openDetailTreasure: (treasureName: string) => void;
}

const DeckPage: FC<Props> = ({ openDetailCookie, openDetailTreasure }) => {
  return <DeckList openDetailCookie={openDetailCookie} openDetailTreasure={openDetailTreasure} />;
};

export default DeckPage;
