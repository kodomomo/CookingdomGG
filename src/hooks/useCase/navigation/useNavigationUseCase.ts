import { useEffect } from 'react';
import useNavigation from '../../domain/navigation/useNavigation';
import { useHistory } from 'react-router-dom';

const useNavigationUseCase = () => {
  const history = useHistory();
  const { page, setPage } = useNavigation();
  useEffect(() => {
    history.push(`/${page}`);
  }, [page]);
  return {
    page,
    setPage,
  };
};

export default useNavigationUseCase;
