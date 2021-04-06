import { useEffect, useState } from 'react';
import { majorType, positionType, rankType, tierType } from '../../../models/cookie';
import { getCookiesByMajor, getCookiesByPosition, getCookiesByrank, getCookiesByTier } from '../../api/list/listApi';
import useCookieList from '../../domain/list/useCookieList';

const useCookieListUseCase = () => {
    const { cookieList, setCookieList, searchType, setSearchType } = useCookieList();
    const [tier, setTier] = useState<tierType>('ALL');
    const [rank, setRank] = useState<rankType>('ALL');
    const [position, setPosition] = useState<positionType>('ALL');
    const [major, setMajor] = useState<majorType[]>([]);

    const getCookieByTier = async() => {
        const data  = await getCookiesByTier(tier);
        setCookieList([]);
        setCookieList(data);
    };

    const getCookieByRank = async() => {
        const data = await getCookiesByrank(rank);
        setCookieList([]);
        setCookieList(data);
    };

    const getCookieByPosition = async() => {
        const data = await getCookiesByPosition(position);
        setCookieList([]);
        setCookieList(data);
    };

    const getCookieByMajor = async() => {
        const data = await getCookiesByMajor(major);
        setCookieList([]);
        setCookieList(data);
    };

    useEffect(()=> {
        if (searchType === '티어') {
            if (tier === 'ALL') getCookieByTier();
            else setTier('ALL');
        } else if (searchType === '랭크') {
            if (rank === 'ALL') getCookieByRank();
            else setRank('ALL');
        } else if (searchType === '포지션') {
            if (position === 'ALL') getCookieByPosition();
            else setPosition('ALL');
        } else if (searchType === '직업') {
            if (major.length === 0) getCookieByMajor();
            else setMajor([]);
        }
    }, [searchType]);

    useEffect(() => {
        if (searchType === '티어') getCookieByTier();
        else if (searchType === '랭크') getCookieByRank();
        else if (searchType === '포지션') getCookieByPosition();
        else if (searchType === '직업') getCookieByMajor();
    }, [tier, rank, position, major])

    return {
        cookieList,
        setCookieList,
        searchType,
        setSearchType,
        tier,
        setTier,
        rank,
        setRank,
        position,
        setPosition,
        major,
        setMajor
    };
};

export default useCookieListUseCase;