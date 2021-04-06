import { useState } from 'react';
import { cookie, searchType } from '../../../models/cookie';

const useCookieList = () => {
    const [cookieList, setCookieList] = useState<cookie[]>([]);
    const [searchType, setSearchType] = useState<searchType>('티어');
    return {
        cookieList,
        setCookieList,
        searchType,
        setSearchType,
    };
};

export default useCookieList;