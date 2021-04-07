export const ALL = 'ALL';
const EPIC = 'EPIC';
const RARE = 'RARE';
const NORMAL = 'NORMAL';
const CRITICAL = 'CRITICAL';
const POWER = 'POWER';
const DAMAGE = 'DAMAGE';
const DEFENCE = 'DEFENCE';
const COOL_DOWN = 'COOL_DOWN';
const INVINCIBILITY = 'INVINCIBILITY';
const COIN = 'COIN';
const PHYSICAL = 'PHYSICAL';
const REVIVAL = 'REVIVAL';
const DEBUFF = 'DEBUFF';

export const titles = ['', '/rank?rank', '/effect?effect'];
export const subs: Record<string, string> = {
  ALL,
  EPIC,
  RARE,
  NORMAL,
  CRITICAL,
  POWER,
  DAMAGE,
  DEFENCE,
  COOL_DOWN,
  INVINCIBILITY,
  COIN,
  PHYSICAL,
  REVIVAL,
  DEBUFF,
};

export const rank: Record<string, string> = {
  [ALL]: '전체',
  [EPIC]: '에픽',
  [RARE]: '레어',
  [NORMAL]: '노말',
  [CRITICAL]: '치명타',
  [POWER]: '공격력',
  [DAMAGE]: '피해량',
  [DEFENCE]: '방어력',
  [COOL_DOWN]: '쿨타임',
  [INVINCIBILITY]: '무적',
  [COIN]: '코인 획득',
  [PHYSICAL]: '체력',
  [REVIVAL]: '부활',
  [DEBUFF]: '디버프 제거',
};

export const menu = [
  {
    title: '전체',
    sub: [],
  },
  {
    title: '랭크',
    sub: [ALL, EPIC, RARE, NORMAL],
  },
  {
    title: '효과',
    sub: [
      ALL,
      CRITICAL,
      POWER,
      DAMAGE,
      DEFENCE,
      COOL_DOWN,
      INVINCIBILITY,
      COIN,
      PHYSICAL,
      REVIVAL,
      DEBUFF,
    ],
  },
];

export type Treasure = {
  name: string;
  rank: string;
  effect: string;
  description: string;
  image_url: string;
};
