import React, { FC, memo } from 'react';

import './index.scss';
import Header from './Header';
import Content from './Content';

import useTreasureUseCase from '../../hooks/useCase/treasure/useTreasureUseCase';

interface Props {
  openDetailTreasure: (treasureName: string) => void;
}

const Treasure: FC<Props> = ({ openDetailTreasure }) => {
  const [treasures, selectMenu, selectSub, onClickMenu, onClickSub] = useTreasureUseCase();

  return (
    <div id='cookielist__wrapper' className='treasure__wrap'>
      <Header
        selectMenu={selectMenu}
        selectSub={selectSub}
        onClickMenu={onClickMenu}
        onClickSub={onClickSub}
      />
      <Content treasures={treasures} openDetailTreasure={openDetailTreasure} />
    </div>
  );
};

export default memo(Treasure);
