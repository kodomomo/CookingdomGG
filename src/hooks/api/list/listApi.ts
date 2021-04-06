import { cookie, majorType, positionType, rankType, tierType } from '../../../models/cookie';
import { getRequest } from '../default/api';

const request = getRequest();

export const getCookiesByTier = async(tier: tierType): Promise<cookie[]> => {
    try {
        let param = "tier=" + tier;
        if (tier === 'ALL') param = "";
        const { data } = await request.get<cookie[]>('/cookie/tier?' + param);
        return data;
    } catch (error) {
        console.log(error);
    }
    return [];
};

export const getCookiesByrank = async(rank: rankType): Promise<cookie[]> => {
    try {
        let param = "rank=" + rank;
        if (rank === 'ALL') param = "";
        const { data } = await request.get<cookie[]>('/cookie/rank?' + param);
        return data;
    } catch (error) {
        console.log(error);
    }
    return [];
};

export const getCookiesByPosition = async(position: positionType): Promise<cookie[]> => {
    try {
        let param = "position=" + position;
        if (position === 'ALL') param = "";
        const { data } = await request.get<cookie[]>('/cookie/position?' + param);
        return data;
    } catch (error) {
        console.log(error);
    }
    return [];
};

export const getCookiesByMajor = async(majors: majorType[]): Promise<cookie[]> => {
    try {
        const { data } = await request.get<cookie[]>('/cookie/rank');
        if (majors.length === 0) return data;
        return data.filter(cookie => majors.includes(cookie.major as majorType));
    } catch (error) {
        console.log(error);
    }
    return [];
};