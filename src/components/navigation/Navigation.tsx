import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

const Navigation = () => {
  return (
    <BottomNavigation showLabels className='navigation'>
      <BottomNavigationAction label='쿠키 검색' />
      <BottomNavigationAction label='쿠키 보기' />
      <BottomNavigationAction label='조합 보기' />
    </BottomNavigation>
  );
};

export default Navigation;
