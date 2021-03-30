import { deck, type } from '../../../models/cookie';
import { getRequest } from '../default/api';

const request = getRequest();

export const getAllDeck = async (): Promise<deck[]> => {
  try {
    const { data } = await request.get<deck[]>('/combination');
    return data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getTypeDeck = async (type: type): Promise<deck[]> => {
  try {
    const { data } = await request.get<deck[]>(`/combination/type?type=${type}`);
    return data;
  } catch (error) {}
  return [];
};
