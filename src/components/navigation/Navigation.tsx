import React, { ChangeEvent } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import './style/index.scss';
import useNavigation from '../../hooks/domain/navigation/useNavigation';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
  const { page, setPage } = useNavigation();
  const history = useHistory();

  const navigationValueChangeHandler = (event: ChangeEvent<{}>, value: string) => {
    setPage(value);
  };

  useEffect(() => {
    const path = new URL(window.location.href).pathname.split('/')[1];
    if (!path) return;
    setPage(path);
  }, []);

  useEffect(() => {
    history.push(`/${page}`);
  }, [page]);
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
