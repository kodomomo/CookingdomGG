import React, { FC } from 'react';
import CookieList from '../components/cookieList';

interface Props {
    openDetailCookie: (value: string) => void;
}

const CookieListPage: FC<Props> = ({ openDetailCookie }) => {
    return <CookieList openDetailCookie={openDetailCookie} />;
};

export default CookieListPage;