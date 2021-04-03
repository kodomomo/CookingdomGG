import React, { FC } from 'react';
import { cookie, treasure } from '../../../models/cookie';
import ListItem from '../../listItem';

interface Props {
  cookieList: cookie[];
  treasureList: treasure[];
}

const Deck: FC<Props> = ({ cookieList, treasureList }) => {
  return (
    <div>
      <div className='deck__cookie__wrapper'>
        {cookieList.map((cookie, index) => (
          <ListItem
            image={cookie.cookie_image_url}
            name={cookie.name}
            index={index}
            key={`cookie ${index} ${cookie.name}`}
          />
        ))}
      </div>
      <div className='deck__cookie__wrapper'>
        {treasureList.map((treasure, index) => (
          <ListItem
            image={treasure.image_url}
            name={treasure.name}
            index={index}
            key={`cookie ${index} ${treasure.name}`}
            width='70px'
            height='70px'
          />
        ))}
      </div>
      <div className='decklist__line' />
    </div>
  );
};

export default Deck;
