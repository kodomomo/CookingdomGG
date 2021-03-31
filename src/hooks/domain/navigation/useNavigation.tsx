import { useState } from 'react';

const useNavigation = () => {
  const [page, setPage] = useState('');
  return { page, setPage };
};

export default useNavigation;
