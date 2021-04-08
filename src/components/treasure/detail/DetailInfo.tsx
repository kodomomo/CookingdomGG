import React, { FC } from 'react';

import config from '../../../config';
import { Treasure as TreasureType } from '../../../models/treasure';

interface Props {
  treasure: TreasureType;
}

const DetailInfo: FC<Props> = ({ treasure }) => {
  const { image_url, name, rank } = treasure;

  return (
    <div className='cookiedetail__cookie'>
      <h2 className='cookiedetail__title'>쿠키 정보 보기</h2>
      <div className='cookiedetail__content__wrapper'>
        <div className='cookiedetail__image__wrapper'>
          <img src={`${config.imageUrl}${image_url}`} alt='treasure image' />
        </div>
        <div className='cookiedetail__info__wrapper'>
          <p>{name}</p>
          <p className='cookiedetail__info__rank'>{rank}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
