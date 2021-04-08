import React, { FC, useMemo } from 'react';
import { cookie, treasure } from '../../../models/cookie';
import ListItem from '../../listItem';

interface Props {
  cookieList: cookie[];
  treasureList: treasure[];
  openDetailCookie: (value: string) => void;
  substitution: treasure[];
}

const Deck: FC<Props> = ({ cookieList, treasureList, openDetailCookie, substitution }) => {
  const getCookieListClickHandler = (cookieName: string) => () => {
    openDetailCookie(cookieName);
  };
  const renderedCookieList: JSX.Element[] = useMemo(
    () =>
      cookieList.map((cookie, index) => (
        <ListItem
          image={cookie.cookie_image_url}
          name={cookie.name}
          index={index}
          key={`cookie ${index} ${cookie.name}`}
          onClick={getCookieListClickHandler(cookie.name)}
        />
      )),
    [cookieList],
  );
  const renderedTreasureList = useMemo(
    () =>
      treasureList.map((treasure, index) => (
        <ListItem
          image={treasure.image_url}
          name={treasure.name}
          index={index}
          key={`cookie ${index} ${treasure.name}`}
          width='70px'
          height='70px'
        />
      )),
    [treasureList],
  );
  const renderedSubstitutionList = useMemo(() => {
    const value = substitution.map((treasure, index) => (
      <ListItem
        image={treasure.image_url}
        name={treasure.name}
        index={index}
        key={`cookie ${index} ${treasure.name}`}
        width='70px'
        height='70px'
      />
    ));
    if (value.length >= 2) value.splice(1, 0, <p>중 택1</p>);
    return value;
  }, [substitution]);
  console.log(renderedSubstitutionList);
  return (
    <div>
      <div className='deck__cookie__wrapper'>{renderedCookieList}</div>
      <div className='deck__cookie__wrapper'>
        {renderedTreasureList}
        {renderedSubstitutionList}
      </div>
      <div className='decklist__line' />
    </div>
  );
};

export default Deck;
