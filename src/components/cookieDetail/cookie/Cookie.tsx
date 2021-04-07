import React, { FC, useCallback } from 'react';
import config from '../../../config';
import { cookie } from '../../../models/cookie';

import '../style/index.scss';

interface Props {
  cookie: cookie;
}

const Cookie: FC<Props> = ({ cookie }) => {
  return (
    <div className='cookiedetail__cookie'>
      <h2 className='cookiedetail__title'>쿠키 정보 보기</h2>
      <div className='cookiedetail__content__wrapper'>
        <div className='cookiedetail__image__wrapper'>
          <img src={`${config.apiHost}/image/${cookie.cookie_image_url}`} alt='' />
        </div>
        <div className='cookiedetail__info__wrapper'>
          <p>{cookie.name}</p>
          <p>{cookie.position}</p>
          <p className='cookiedetail__info__rank'>{cookie.rank}</p>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
