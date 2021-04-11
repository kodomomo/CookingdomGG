import React, { FC, memo, MouseEvent } from 'react';
import { Treasure } from '../../models/treasure';
import ListItem from '../listItem';

interface Props {
  treasures: Treasure[];
  openDetailTreasure: (treasureName: string) => void;
}

const Content: FC<Props> = ({ treasures, openDetailTreasure }) => {
  const handleOpenDetail = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.name) openDetailTreasure(e.currentTarget.dataset.name);
  };

  const getHandlerOpenDetail = (treasureName: string) => () => {
    openDetailTreasure(treasureName);
  };

  return (
    <div className='cookielist__content'>
      <div className='cookielist__content__list'>
        {treasures.map((treasure, i) => {
          const { image_url, name } = treasure;

          return (
            <ListItem
              image={image_url}
              name={name}
              index={i}
              onClick={getHandlerOpenDetail(name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Content);
