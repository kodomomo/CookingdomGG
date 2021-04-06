import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const requestWrapper = (callback: () => Promise<any>) => async () => {
    setLoading(true);
    await callback();
    setLoading(false);
  };
  return {
    loading,
    requestWrapper,
  };
};

export default useLoading;
