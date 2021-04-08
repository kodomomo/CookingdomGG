import React, { FC } from 'react';
import config from '../../../config';

import '../style/index.scss';

interface Props {
  topping: string[];
}

const Topping: FC<Props> = ({ topping }) => {
  const getToppingImages = () => {
    if (!topping) return;
    return topping.map((url, i) => (
      <img key={i} src={`${config.apiHost}/image/${url}.png`} alt='' />
    ));
  };

  return (
    <div>
      <h2 className='cookiedetail__title'>어울리는 토핑</h2>
      <div className='cookiedetail__topping_image__wrapper'>{getToppingImages()}</div>
    </div>
  );
};

export default Topping;
