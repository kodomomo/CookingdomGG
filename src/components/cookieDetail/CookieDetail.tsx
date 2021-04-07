import React, { FC, useEffect, useState } from 'react';
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

  useEffect(() => {
    const element = document.getElementById('cookielist__wrapper');
    if (open) {
      if (element) {
        // element.style.overflowY = 'hidden';
      }
    } else {
      if (element) {
        element.style.overflowY = 'scroll';
      }
    }
  }, [open]);

  const { cookie, setName } = useCookieUseCase();

  useEffect(() => {
    setName(cookieName);
  }, [cookieName]);

  let currentPos: number;
  let [processing, setProcessing] = useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    currentPos = e.clientY;
    setProcessing(true);
  };

  const clickMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dragHandler(e.currentTarget, e.clientY);
  };

  const clickCloseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    detailClose(e.currentTarget, e.clientY);
  };

  const onTouchHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    currentPos = e.targetTouches[0].clientY;
    setProcessing(true);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    dragHandler(e.currentTarget, e.targetTouches[0].clientY);
  };

  const touchCloseHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    detailClose(e.currentTarget, e.changedTouches[0].clientY);
  };

  const getMovedPos = (element: HTMLDivElement, clientY: number) => {
    let bottom = 0;
    if (element.style.bottom !== '')
      bottom = Number.parseInt(element.style.bottom.substr(0, element.style.bottom.length - 2));
    let pos = currentPos - clientY;
    return bottom + pos;
  };

  const dragHandler = (element: HTMLDivElement, clientY: number) => {
    if (processing) {
      let movedPos = getMovedPos(element, clientY);
      if (movedPos > 0) return;
      currentPos = clientY;
      element.style.bottom = movedPos + 'px';
    }
  };

  const detailClose = (element: HTMLDivElement, clientY: number) => {
    let movedPos = getMovedPos(element, clientY);
    if (movedPos < -150) {
      element.style.bottom = '';
      setOpen(false);
    } else {
      element.style.bottom = '0px';
    }
    setProcessing(false);
  };

  return (
    <div
      className={`cookiedetail ${open ? 'cookiedetail--open' : ''} ${processing ? '' : 'moving'}`}
      onClick={cookieDetailClickHandler}
      onMouseDown={onClickHandler}
      onMouseMove={clickMoveHandler}
      onMouseUp={clickCloseHandler}
      onTouchStart={onTouchHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchCloseHandler}
      onScroll={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className='cookiedetail__wrapper'>
        <Cookie cookie={cookie} />
        <Topping topping={cookie.topping} />
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
