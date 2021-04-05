import React, { FC, useEffect } from 'react';
import useCookieUseCase from '../../hooks/useCase/cookie/useCookieUseCase';
import { Cookie } from './cookie';
import { Topping } from './topping';
import { Skill } from './skill';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  cookieName: string;
}

const CookieDetail: FC<Props> = ({ open, setOpen, cookieName }) => {
  const cookieDetailClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    window.addEventListener('click', () => {
      setOpen(false);
    });
  }, []);

  const { cookie, setName } = useCookieUseCase();

  useEffect(() => {
    setName(cookieName);
  }, [cookieName]);

  return (
    <div
      className={`cookiedetail ${open ? 'cookiedetail--open' : ''}`}
      onClick={cookieDetailClickHandler}
    >
      <div className='cookiedetail__wrapper'>
        <Cookie
          name={cookie.name}
          position={cookie.position}
          rank={cookie.rank}
          cookieImageUri={cookie.cookie_image_url}
        />
        <Topping topping={''} toppingImageUri={''} />
        <Skill
          skillName={cookie.skill_name}
          coolTime={cookie.cool_time}
          skillImageUri={cookie.skill_image_url}
          skillDescription={cookie.skill_description}
        />
      </div>
    </div>
  );
};

export default CookieDetail;
