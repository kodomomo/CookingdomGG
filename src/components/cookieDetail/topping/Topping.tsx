import React, { FC, useCallback } from 'react';
import config from '../../../config';
import { cookie } from '../../../models/cookie';

import '../style/index.scss';

interface Props {
  topping: string[];
}

const Topping: FC<Props> = ({ topping }) => {
  const getToppingImages = () => {
    if (!topping) topping = [];
    return topping.map(url => <img src={`${config.apiHost}/topping/${url}`} alt='' />);
  };

  return (
    <div>
      <h2 className='cookiedetail__title'>어울리는 토핑</h2>
      <div className='cookiedetail__topping_image__wrapper'>{getToppingImages()}</div>
    </div>
  );
};

export default Topping;
