import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DeckPage, CookieListPage } from './pages';
import Navigation from './components/navigation';
import { CookieDetail } from './components/cookieDetail';
import Treasure from './components/treasure/Treasure';
import TreasureDetail from './components/treasure/detail/Detail';

const App = () => {
  const [cookieDetailOpen, setCookieDetailOpen] = useState(false);
  const [cookieDetailName, setCookieDetailName] = useState<string>('');
  const [treasureDetailOpen, setTreasureDetailOpen] = useState(false);
  const [treasureDetailName, setTreasureDetailName] = useState<string>('');

  const openDetailCookie = (cookieName: string) => {
    setCookieDetailName(cookieName);
    setCookieDetailOpen(true);
  };

  const openDetailTreasure = (treasureName: string) => {
    setTreasureDetailOpen(true);
    setTreasureDetailName(treasureName);
  };

  return (
    <BrowserRouter>
      <div className='webview__wrapper'>
        <div className='main'>
          <Switch>
            <Route
              path='/deck'
              render={() => (
                <DeckPage
                  openDetailCookie={openDetailCookie}
                  openDetailTreasure={openDetailTreasure}
                />
              )}
            />
            <Route
              path='/cookies'
              render={() => <CookieListPage openDetailCookie={openDetailCookie} />}
            />
            <Route
              path='/treasures'
              render={() => <Treasure openDetailTreasure={openDetailTreasure} />}
            />
          </Switch>
        </div>
        <Navigation />
        <CookieDetail
          open={cookieDetailOpen}
          setOpen={setCookieDetailOpen}
          cookieName={cookieDetailName}
        />
        <TreasureDetail
          open={treasureDetailOpen}
          setOpen={setTreasureDetailOpen}
          treasureName={treasureDetailName}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
