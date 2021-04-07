import { Treasure } from '../../../models/treasure';
import { getRequest } from '../default/api';

export const getTreasuresParam = (param?: string) => {
  return getRequest().get<Treasure[]>(`/treasure${param}`);
};
