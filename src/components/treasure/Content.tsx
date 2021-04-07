import { Zoom } from '@material-ui/core';
import React, { FC } from 'react';
import config from '../../config';
import { Treasure } from '../../models/treasure';

interface Props {
  treasures: Treasure[];
}

const Content: FC<Props> = ({ treasures }) => {
  return (
    <div className='cookielist__content'>
      <div className='cookielist__content__list'>
        {treasures.map((treasure, i) => {
          const { image_url } = treasure;

          return (
            <Zoom in={true}>
              <div
                key={i}
                className='cookielist__content__list__paper treasure__content_item'
                style={{
                  transitionDelay: `${i++ * 1000}ms`,
                }}
              >
                <img src={`${config.imageUrl}${image_url}`} alt='treasure' />
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
