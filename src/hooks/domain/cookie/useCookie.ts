import { useState } from 'react';
import { cookie } from '../../../models/cookie';

const useCookie = () => {
  const [cookie, setCookie] = useState<cookie>({} as cookie);
  const [name, setName] = useState<string>("");
  return {
    cookie,
    setCookie,
    name,
    setName
  };
};

export default useCookie;
