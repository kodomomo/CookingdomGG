import React, { FC, useCallback } from 'react';
import { cookie } from '../../../models/cookie';

import "../style/index.scss"

interface Props {
  name: string;
  position: string;
  rank: string;
  cookieImageUri: String;
}

const Cookie: FC<Props> = ({
  name,
  position,
  rank,
  cookieImageUri
}) => {
  return (
    <div className='cookiedetail__cookie'>
        <h2 className='cookiedetail__title'>쿠키 정보 보기</h2>
        <div className='cookiedetail__content__wrapper'>
            <div className='cookiedetail__image__wrapper'>
                <img src={`https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/${cookieImageUri}`} alt=""/>
            </div>
            <div className='cookiedetail__info__wrapper'>
                <p>{name}</p>
                <p>{position}</p>
                <p className='cookiedetail__info__rank'>{rank}</p>
            </div>
        </div>
    </div>
  )
}

export default Cookie;