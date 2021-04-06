import React, { FC, useCallback } from 'react';
import { cookie } from '../../../models/cookie';

import "../style/index.scss"

interface Props {
    topping: string;
    toppingImageUri: string;
}

const Topping: FC<Props> = ({
    topping,
    toppingImageUri
}) => {
  return (
      <div>
          <h2 className='cookiedetail__title'>어울리는 토핑</h2>
          <div className='cookiedetail__topping_image__wrapper'>
              <img src={`https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/${toppingImageUri}`} alt=""/>
          </div>
      </div>
  )
}

export default Topping;