import { cookie } from '../../../models/cookie';
import { getRequest } from '../default/api';

const request = getRequest();

export const getCookieList = async (name: string): Promise<cookie[]> => {
  try {
    const { data } = await request.get<cookie[]>(`/cookie/name?name=${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
};