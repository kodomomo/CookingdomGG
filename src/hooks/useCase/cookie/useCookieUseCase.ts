import { useEffect } from 'react';
import useCookie from '../../domain/cookie/useCookie';
import { getCookieList } from '../../api/cookie/cookieApi';

const useCookieUseCase = () => {
  const { cookie, setCookie, name, setName } = useCookie();
  const getCookie = async () => {
    const data = await getCookieList(name);
    setCookie(data[0]);
  };
  useEffect(() => {
    getCookie();
  }, [name]);
  return {
    cookie,
    setCookie,
    name,
    setName
  };
};

export default useCookieUseCase;
