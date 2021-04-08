import { useEffect, useState } from 'react';

import { Treasure } from '../../../models/treasure';
import { getTreasuresParam } from '../../api/treasure/treasureApi';

const useTreasureDetailUseCase = (treasureName: string) => {
  const [treasure, setTreasure] = useState<Treasure | null>(null);

  useEffect(() => {
    if (!treasureName) return;

    const getTreasureInfo = async () => {
      try {
        const res = await getTreasuresParam(`/name?name=${treasureName}`);

        setTreasure(res.data[0]);
      } catch (err) {}
    };

    getTreasureInfo();
  }, [treasureName]);

  return treasure;
};

export default useTreasureDetailUseCase;
