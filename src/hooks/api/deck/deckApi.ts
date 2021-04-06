import { cookie, deck, treasure, type } from '../../../models/cookie';
import { getRequest } from '../default/api';

const request = getRequest();

export const getAllDeck = async (): Promise<deck[]> => {
  try {
    const { data } = await request.get<deck[]>('/combination');
    const deckDataAsync = data.map(async deck => {
      const cookieListAsync = deck.cookie.map(async cookie => {
        const { data } = await request.get<cookie[]>(`/cookie/name?name=${cookie}`);
        return data[0] ? data[0] : ({} as cookie);
      });
      const treasureListAsync = deck.treasure.map(async treasure => {
        const { data } = await request.get<treasure[]>(`/treasure/name?name=${treasure}`);
        return data[0] ? data[0] : ({} as treasure);
      });
      const cookieList = await Promise.all(cookieListAsync);
      const treasureList = await Promise.all(treasureListAsync);
      return {
        type: deck.type,
        cookie: cookieList,
        treasure: treasureList,
        substitution: [],
      };
    });
    const deck: deck[] = await Promise.all(deckDataAsync);
    return deck;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getTypeDeck = async (type: type): Promise<deck[]> => {
  try {
    const { data } = await request.get<deck[]>(`/combination/type?type=${type}`);
    const deckDataAsync = data.map(async deck => {
      const cookieListAsync = deck.cookie.map(async cookie => {
        const { data } = await request.get<cookie[]>(`/cookie/name?name=${cookie}`);
        return data[0] ? data[0] : ({} as cookie);
      });
      const treasureListAsync = deck.treasure.map(async treasure => {
        const { data } = await request.get<treasure[]>(`/treasure/name?name=${treasure}`);
        return data[0] ? data[0] : ({} as treasure);
      });
      const cookieList = await Promise.all(cookieListAsync);
      const treasureList = await Promise.all(treasureListAsync);
      return {
        type: deck.type,
        cookie: cookieList,
        treasure: treasureList,
        substitution: [],
      };
    });
    const deck: deck[] = await Promise.all(deckDataAsync);
    return deck;
  } catch (error) {}
  return [];
};
