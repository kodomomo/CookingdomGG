import React, { FC } from 'react';
import { type } from '../../../models/cookie';
import '../style/index.scss';

interface Props {
  setDeckType: (value: type) => void;
  deckType: type;
}

const Header: FC<Props> = ({ setDeckType, deckType }) => {
  const isSelected = (nowDeckType: type, itemDeckType: type): boolean => {
    if (nowDeckType === itemDeckType) {
      return true;
    }
    return false;
  };
  const getDeckTypeButtonClickHandler = (itemDeckType: type) => {
    return () => setDeckType(itemDeckType);
  };
  return (
    <div className='cookielist__header'>
      <div className='cookielist__header__title'>
        <img />
        <p>조합 보기</p>
      </div>
      <div className='cookielist__header__type treasure-header-list'>
        <div onClick={getDeckTypeButtonClickHandler('ALL')}>All</div>
        <div onClick={getDeckTypeButtonClickHandler('PVE')}>PVE</div>
        <div onClick={getDeckTypeButtonClickHandler('PVP')}>PVP</div>
        <div onClick={getDeckTypeButtonClickHandler('RAID')}>RAID</div>
      </div>
    </div>
  );
};

export default Header;
