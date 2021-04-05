import React, { FC } from 'react';
import DeckList from '../components/deckList';

interface Props {
  openDetailCookie: (value: string) => void;
}

const DeckPage: FC<Props> = ({ openDetailCookie }) => {
  return <DeckList openDetailCookie={openDetailCookie} />;
};

export default DeckPage;
