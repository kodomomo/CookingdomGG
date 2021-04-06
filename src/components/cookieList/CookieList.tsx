import React, { FC } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Header from './header';
import useCookieListUseCase from '../../hooks/useCase/list/useCookieListUseCase';
import { cookie } from '../../models/cookie';
import config from '../../config';

interface Props {
  openDetailCookie: (value: string) => void;
}

const CookieList: FC<Props> = ({ openDetailCookie }) => {
  const {
    cookieList,
    searchType,
    setSearchType,
    tier,
    setTier,
    rank,
    setRank,
    position,
    setPosition,
    major,
    setMajor,
  } = useCookieListUseCase();

  const getCookieListClickHandler = (cookieName: string) => (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    openDetailCookie(cookieName);
  };

  const renderCookieList = (cookies: cookie[]) => {
    let i = 0;
    return cookies.map((cookie, index) => (
      <Zoom
        in={true}
        style={{
          transitionDelay: `${i++ * 15}ms`,
          height: '100px',
          borderRadius: '15px',
        }}
      >
        <div
          className='cookielist__content__list__paper'
          onClick={getCookieListClickHandler(cookie.name)}
        >
          <img src={`${config.apiHost}/image/${cookie.cookie_image_url}`} />
        </div>
      </Zoom>
    ));
  };

  return (
    <div id='cookielist__wrapper'>
      <Header
        searchType={searchType}
        setSearchType={setSearchType}
        tier={tier}
        setTier={setTier}
        rank={rank}
        setRank={setRank}
        position={position}
        setPosition={setPosition}
        major={major}
        setMajor={setMajor}
      />
      <div className='cookielist__content'>
        <div className='cookielist__content__list'>{renderCookieList(cookieList)}</div>
      </div>
    </div>
  );
};

export default CookieList;
