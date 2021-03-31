import React, { ChangeEvent } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import './style/index.scss';
import useNavigation from '../../hooks/domain/navigation/useNavigation';

const Navigation = () => {
  const { page, setPage } = useNavigation();

  const navigationValueChangeHandler = (event: ChangeEvent<{}>, value: string) => {
    setPage(value);
  };
  return (
    <BottomNavigation
      showLabels
      className='navigation'
      onChange={navigationValueChangeHandler}
      value={page}
    >
      <BottomNavigationAction label='쿠키 검색' value='search' />
      <BottomNavigationAction label='쿠키 보기' value='main' />
      <BottomNavigationAction label='조합 보기' value='deck' />
    </BottomNavigation>
  );
};

export default Navigation;
