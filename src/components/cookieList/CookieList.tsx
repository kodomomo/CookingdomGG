import { FC } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Header from './header';
import useCookieListUseCase from '../../hooks/useCase/list/useCookieListUseCase';
import { cookie } from '../../models/cookie';

interface Props {}

const CookieList: FC = () => {

    const {
        cookieList, setCookieList,
        searchType, setSearchType,
        tier, setTier,
        rank, setRank,
        position, setPosition,
        major, setMajor
    } = useCookieListUseCase();

    const renderCookieList = (cookies: cookie[]) => {
        let i = 0;
        return cookies.map((cookie, index) => (
            <Zoom in={true} style={{
                    transitionDelay: `${i++ * 15}ms`,
                    height: '100px',
                    borderRadius: '15px'
                }}>
                <div className="cookielist__content__list__paper">
                    <img src={"https://codomo.s3.ap-northeast-2.amazonaws.com/static/image/" + cookie.cookie_image_url} />
                </div>
            </Zoom>
        ));
    }

    return (
        <div id="cookielist__wrapper">
            <Header 
                searchType={searchType} setSearchType={setSearchType}
                tier={tier} setTier={setTier}
                rank={rank} setRank={setRank}
                position={position} setPosition={setPosition}
                major={major} setMajor={setMajor} />
            <div className="cookielist__content">
                <div className="cookielist__content__list">
                    {renderCookieList(cookieList)}
                </div>
            </div>
        </div>
    );
};

export default CookieList;