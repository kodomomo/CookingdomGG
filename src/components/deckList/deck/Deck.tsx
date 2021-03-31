import React, { FC } from 'react';
import { cookie, treasure } from '../../../models/cookie';
import DeckListItem from './deckListItem';

interface Props {
  cookieList: cookie[];
  treasureList: treasure[];
}

const Deck: FC<Props> = ({ cookieList, treasureList }) => {
  return (
    <div>
      <div className='deck__cookie__wrapper'>
        {cookieList.map(cookie => (
          <DeckListItem image={cookie.cookie_image_url} name={cookie.name} />
        ))}
      </div>
      <div className='deck__cookie__wrapper'>
        {treasureList.map(treasure => (
          <DeckListItem image={treasure.image_url} name={treasure.name} />
        ))}
      </div>
      <div className='decklist__line' />
    </div>
  );
};

export default Deck;
