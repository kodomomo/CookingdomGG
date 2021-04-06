export type cookie = {
  name: string;
  rank: string;
  tier: number;
  major: string;
  position: string;
  topping: string;
  skill_name: string;
  skill_description: string;
  cool_time: number;
  cookie_image_url: string;
  skill_image_url: string;
  major_image_url: string;
};

export type treasure = {
  name: string;
  rank: string;
  effect: string;
  description: string;
  image_url: string;
};

export type deck = {
  type: type;
  cookie: cookie[];
  treasure: treasure[];
  substitution: string[];
};

export type type = 'PVP' | 'PVE' | 'RAID' | 'ALL';

export type searchType = '티어' | '랭크' | '포지션' | '직업';
export type tierType =  'ALL' | '1' | '2' | '3' | '4' | '5';
export type rankType = 'ALL' | 'EPIC' | 'RARE' | 'NORMAL';
export type positionType = 'ALL' | 'FRONT' | 'CENTER' | 'REAR';
export type majorType = 'WIZARD' | 'CHARGE' | 'DEFENSE' | 'RECOVERY' | 'SUPPORT' | 'PENETRATION' | 'OBLIQUE_CASE' | 'EXPLOSION';