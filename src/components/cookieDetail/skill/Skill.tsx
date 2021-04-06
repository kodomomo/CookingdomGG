import React, { FC, useCallback } from 'react';
import { cookie } from '../../../models/cookie';

import "../style/index.scss"

interface Props {
  skillName: string;
  coolTime: number;
  skillDescription: string;
  skillImageUri: string;
}

const Skill: FC<Props> = ({
  skillName,
  coolTime,
  skillDescription,
  skillImageUri
}) => {
  return (
      <div className='cookiedetail__skill'>
          <h2 className='cookiedetail__title'>스킬</h2>
          <div className='cookiedetail__content__wrapper'>
            <div className='cookiedetail__image__wrapper'>
                <img src={`https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/${skillImageUri}`} alt=""/>
            </div>
            <div className='cookiedetail__info__wrapper'>
                <p>{skillName}</p>
                <p>쿨타임 : {coolTime}</p>
                <p>{skillDescription}</p>
            </div>
          </div>
      </div>
  )
}

export default Skill;