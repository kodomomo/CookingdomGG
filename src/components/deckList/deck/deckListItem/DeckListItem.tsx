import React, { FC } from 'react';
import '../../style/index.scss';

interface Props {
  image: string;
  name: string;
}

const DeckListItem: FC<Props> = ({ image, name }) => {
  return (
    <div className='decklist__item'>
      <div className='decklist__image'>
        <img className='decklist__image' src={image} alt={name} />
      </div>
      <p className='decklist__name'>{name}</p>
    </div>
  );
};

export default DeckListItem;
