import React, { FC, useEffect, useState, MouseEvent, TouchEvent } from 'react';

import DetailInfo from './DetailInfo';
import Effect from './Effect';

import useTreasureDetailUseCase from '../../../hooks/useCase/treasure/useTreasureDetailUseCase';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  treasureName: string;
}

type DivMouseEvent = MouseEvent<HTMLDivElement>;
type DivTouchEvent = TouchEvent<HTMLDivElement>;
type GetMovePosition = {
  element: HTMLDivElement;
  clientY: number;
};

const TreasureDetail: FC<Props> = ({ open, setOpen, treasureName }) => {
  const treasure = useTreasureDetailUseCase(treasureName);
  let currentPos: number;
  let [processing, setProcessing] = useState(false);

  const clickHandler = (e: DivMouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const mouseDownHandler = (e: DivMouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    currentPos = e.clientY;
    setProcessing(true);
  };

  const mouseMoveHandler = (e: DivMouseEvent) => {
    dragHandler({ element: e.currentTarget, clientY: e.clientY });
  };

  const mouseUpHandler = (e: DivMouseEvent) => {
    detailClose({ element: e.currentTarget, clientY: e.clientY });
  };

  const touchStartHandler = (e: DivTouchEvent) => {
    e.stopPropagation();
    currentPos = e.targetTouches[0].clientY;
    setProcessing(true);
  };

  const touchMoveHandler = (e: DivTouchEvent) => {
    dragHandler({ element: e.currentTarget, clientY: e.targetTouches[0].clientY });
  };

  const touchEndHandler = (e: DivTouchEvent) => {
    detailClose({ element: e.currentTarget, clientY: e.changedTouches[0].clientY });
  };

  const getMovedPos = ({ element, clientY }: GetMovePosition) => {
    let bottom = 0;
    if (element.style.bottom !== '')
      bottom = Number.parseInt(element.style.bottom.substr(0, element.style.bottom.length - 2));
    let pos = currentPos - clientY;
    return bottom + pos;
  };

  const dragHandler = ({ element, clientY }: GetMovePosition) => {
    if (processing) {
      let movedPos = getMovedPos({ element, clientY });
      if (movedPos > 0) return;
      currentPos = clientY;
      element.style.bottom = movedPos + 'px';
    }
  };

  const detailClose = ({ element, clientY }: GetMovePosition) => {
    let movedPos = getMovedPos({ element, clientY });
    if (movedPos < -150) {
      element.style.bottom = '';
      setOpen(false);
    } else {
      element.style.bottom = '0px';
    }
    setProcessing(false);
  };

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);
  useEffect(() => {
    const element = document.getElementById('cookielist__wrapper');
    if (open && element) {
      // element.style.overflowY = 'hidden';
    } else {
      if (element) {
        element.style.overflowY = 'scroll';
      }
    }
  }, [open]);

  return (
    <div
      className={`cookiedetail ${open ? 'cookiedetail--open' : ''} ${processing ? '' : 'moving'}`}
      id='treasureDetail'
      onClick={clickHandler}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      onScroll={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className='cookiedetail__wrapper'>
        {treasure && (
          <>
            <DetailInfo treasure={treasure} />
            <Effect treasure={treasure} />
          </>
        )}
      </div>
    </div>
  );
};

export default TreasureDetail;
