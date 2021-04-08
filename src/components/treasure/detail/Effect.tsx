import React, { FC } from 'react';

import { Treasure } from '../../../models/treasure';

interface Props {
  treasure: Treasure;
}

const Effect: FC<Props> = ({ treasure }) => {
  const { effect, description } = treasure;

  return (
    <div>
      <h2 className='cookiedetail__title'>효과</h2>
      <div className='cookiedetail__topping_image__wrapper'>{effect}</div>
      <div className='cookiedetail__topping_image__wrapper'>{description}</div>
    </div>
  );
};

export default Effect;
