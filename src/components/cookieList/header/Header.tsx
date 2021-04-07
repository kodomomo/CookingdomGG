import React, { FC } from 'react';
import { majorType, positionType, rankType, searchType, tierType } from '../../../models/cookie';
import '../style/index.scss';
import config from '../../../config';

interface Props {
  searchType: searchType;
  setSearchType: (searchType: searchType) => void;
  tier: tierType;
  setTier: (tier: tierType) => void;
  rank: rankType;
  setRank: (rank: rankType) => void;
  position: positionType;
  setPosition: (position: positionType) => void;
  major: majorType[];
  setMajor: (major: majorType[]) => void;
}

const Header: FC<Props> = ({
  searchType,
  setSearchType,
  tier,
  setTier,
  rank,
  setRank,
  position,
  setPosition,
  major,
  setMajor,
}) => {
  const type = [
    {
      title: '티어',
      value: tier,
      sub_list: ['ALL', '1', '2', '3', '4', '5'],
    },
    {
      title: '랭크',
      value: rank,
      sub_list: ['ALL', 'EPIC', 'RARE', 'NORMAL'],
    },
    {
      title: '포지션',
      value: position,
      sub_list: ['ALL', 'FRONT', 'CENTER', 'REAR'],
    },
  ];

  const Majors = [
    'WIZARD',
    'CHARGE',
    'DEFENSE',
    'RECOVERY',
    'SUPPORT',
    'PENETRATION',
    'OBLIQUE_CASE',
    'EXPLOSION',
  ];

  const typeToString: any = {
    ALL: '전체',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    EPIC: '에픽',
    RARE: '레어',
    NORMAL: '일반',
    FRONT: '전방',
    CENTER: '중앙',
    REAR: '후방',
    WIZARD: '마법사',
    CHARGE: '전사',
    DEFENSE: '탱커',
    RECOVERY: '힐러',
    SUPPORT: '서포터',
    PENETRATION: '암살자',
    OBLIQUE_CASE: '원거리 딜러',
    EXPLOSION: '폭탄병',
  };

  const changeSearchType = (selectedType: string) => {
    let selectedSearchType = selectedType as searchType;
    setSearchType(selectedSearchType);
  };

  const changeSearchDetail = (selectedType: string, selectedDetail: string) => {
    let selectedSearchType = selectedType as searchType;
    if (selectedSearchType === '티어') setTier(selectedDetail as tierType);
    else if (selectedSearchType === '랭크') setRank(selectedDetail as rankType);
    else if (selectedSearchType === '포지션') setPosition(selectedDetail as positionType);
    else if (selectedSearchType === '직업') {
      let selectedSearchDetail = selectedDetail as majorType;
      const copiedList = [...major];
      if (major.includes(selectedSearchDetail)) {
        setMajor(copiedList.filter(e => e !== selectedSearchDetail));
      } else {
        copiedList.push(selectedSearchDetail);
        setMajor(copiedList);
      }
    }
  };

  const getHeaderTypes = () => {
    let headers: JSX.Element[] = [];

    type.forEach(t => {
      headers.push(
        <div
          className={t.title === searchType ? 'selected' : ''}
          onClickCapture={() => changeSearchType(t.title)}
        >
          {t.title}
          <ul>
            {t.sub_list.map(sub => (
              <li>
                <button
                  className={sub === t.value ? 'selected' : ''}
                  onClick={() => changeSearchDetail(t.title, sub)}
                >
                  {typeToString[sub]}
                </button>
              </li>
            ))}
          </ul>
        </div>,
      );
    });

    headers.push(
      <div
        className={'직업' === searchType ? 'selected' : ''}
        onClickCapture={() => changeSearchType('직업')}
      >
        직업
        <ul>
          {Majors.map(sub => (
            <li>
              <img
                className={major.includes(sub as majorType) ? 'selected' : ''}
                onClick={() => changeSearchDetail('직업', sub)}
                src={`${config.apiHost}/image/Major_${sub}.png`}
                alt='major'
              />
            </li>
          ))}
        </ul>
      </div>,
    );

    return headers;
  };

  return (
    <div className='cookielist__header'>
      <div className='cookielist__header__title'>
        <img />
        <p>쿠키 보기</p>
      </div>
      <div className='cookielist__header__type'>{getHeaderTypes()}</div>
      <div className=''></div>
    </div>
  );
};

export default Header;
