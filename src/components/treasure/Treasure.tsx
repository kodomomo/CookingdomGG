import React, { FC } from 'react';

import './index.scss';
import Header from './Header';
import Content from './Content';

import useTreasureUseCase from '../../hooks/useCase/treasure/useTreasureUseCase';

interface Props {}

const Treasure: FC<Props> = () => {
  const [treasures, selectMenu, selectSub, onClickMenu, onClickSub] = useTreasureUseCase();

  return (
    <div id='cookielist__wrapper' className='treasure__wrap'>
      <Header
        selectMenu={selectMenu}
        selectSub={selectSub}
        onClickMenu={onClickMenu}
        onClickSub={onClickSub}
      />
      <Content treasures={treasures} />
    </div>
  );
};

export default Treasure;
