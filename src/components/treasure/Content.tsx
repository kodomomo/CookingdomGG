import React, { FC, memo, MouseEvent, useCallback } from 'react';
import { Zoom } from '@material-ui/core';

import config from '../../config';
import { Treasure } from '../../models/treasure';

interface Props {
  treasures: Treasure[];
  openDetailTreasure: (treasureName: string) => void;
}

const Content: FC<Props> = ({ treasures, openDetailTreasure }) => {
  const handleOpenDetail = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.name) openDetailTreasure(e.currentTarget.dataset.name);
  };

  return (
    <div className='cookielist__content'>
      <div className='cookielist__content__list'>
        {treasures.map((treasure, i) => {
          const { image_url, name } = treasure;

          return (
            <Zoom in={true} key={i}>
              <div
                className='cookielist__content__list__paper treasure__content_item'
                style={{
                  transitionDelay: `${i++ * 1000}ms`,
                }}
                data-name={name}
                onClick={handleOpenDetail}
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

export default memo(Content);
