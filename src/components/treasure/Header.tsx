import React, { FC } from 'react';
import { menu, rank } from '../../models/treasure';

interface Props {
  selectMenu: number;
  selectSub: string;
  onClickMenu: (menu: number) => void;
  onClickSub: (sub: string) => void;
}

const Header: FC<Props> = ({ selectMenu, selectSub, onClickMenu, onClickSub }) => {
  return (
    <div className='cookielist__header'>
      <div className='cookielist__header__title'>
        <img />
        <p>보물 보기</p>
      </div>
      <div className='cookielist__header__type treasure-header-list'>
        {menu.map(({ title, sub }, i) => {
          return (
            <div
              className={selectMenu === i ? 'selected' : ''}
              onClick={() => onClickMenu(i)}
              key={title}
            >
              {title}
              <ul>
                {sub.map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={() => onClickSub(item)}
                        className={selectSub === item ? 'selected' : ''}
                      >
                        {rank[item]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=''></div>
    </div>
  );
};

export default Header;
