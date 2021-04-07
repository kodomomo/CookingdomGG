import { useEffect, useState } from 'react';

import { ALL, rank, titles, Treasure } from '../../../models/treasure';
import { getTreasuresParam } from '../../api/treasure/treasureApi';

const useTreasureUseCase = () => {
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [selectMenu, setSelectMenu] = useState<number>(0);
  const [selectSub, setSelectSub] = useState<string>(ALL);

  const onClickMenu = (menu: number) => {
    setSelectMenu(menu);
  };

  const onClickSub = (sub: string) => {
    setSelectSub(sub);
  };

  useEffect(() => {
    const fetchTreasure = async () => {
      let data: Treasure[];
      if (selectSub === ALL) {
        const res = await getTreasuresParam(titles[selectMenu]);
        data = res.data;
      } else if (selectMenu === 1) {
        const res = await getTreasuresParam(`${titles[selectMenu]}=${selectSub}`);
        data = res.data;
      } else {
        const res = await getTreasuresParam(`${titles[selectMenu]}=${rank[selectSub]}`);
        data = res.data;
      }

      setTreasures(data);
    };

    fetchTreasure();
  }, [selectSub]);

  useEffect(() => {
    setSelectSub(ALL);
  }, [selectMenu]);

  return [treasures, selectMenu, selectSub, onClickMenu, onClickSub] as const;
};

export default useTreasureUseCase;
