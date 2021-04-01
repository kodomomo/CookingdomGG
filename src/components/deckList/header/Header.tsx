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
  const returnSelectedClassName = (nowDeckType: type, itemDeckType: type): string => {
    const selected = isSelected(nowDeckType, itemDeckType);
    return selected ? 'selected' : '';
  };
  const getDeckTypeButtonClickHandler = (itemDeckType: type) => {
    return () => setDeckType(itemDeckType);
  };
  return (
    <div className='decklist__header '>
      <p className='decklist__title'>조합보기</p>
      <div className='decklist__category'>
        <button
          className={`decklist__category__item ${returnSelectedClassName(deckType, 'ALL')}`}
          onClick={getDeckTypeButtonClickHandler('ALL')}
        >
          All
        </button>
        <button
          className={`decklist__category__item ${returnSelectedClassName(deckType, 'PVE')}`}
          onClick={getDeckTypeButtonClickHandler('PVE')}
        >
          PVE
        </button>
        <button
          className={`decklist__category__item ${returnSelectedClassName(deckType, 'PVP')}`}
          onClick={getDeckTypeButtonClickHandler('PVP')}
        >
          PVP
        </button>
        <button
          className={`decklist__category__item ${returnSelectedClassName(deckType, 'RAID')}`}
          onClick={getDeckTypeButtonClickHandler('RAID')}
        >
          RAID
        </button>
      </div>
    </div>
  );
};

export default Header;
