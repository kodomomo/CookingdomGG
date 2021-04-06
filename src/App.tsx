import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import { CookieDetail } from './components/cookieDetail';
import { DeckPage } from './pages';
import CookieListPage from './pages/CookieListPage';

const App = () => {
  const [cookieDetailOpen, setCookieDetailOpen] = useState(false);
  const [cookieDetailName, setCookieDetailName] = useState<string>('');

  const openDetailCookie = (cookieName: string) => {
    setCookieDetailName(cookieName);
    setCookieDetailOpen(true);
  };

  return (
    <BrowserRouter>
      <div className='webview__wrapper'>
        <div className='main'>
          <Switch>
            <Route path='/deck' render={() => <DeckPage openDetailCookie={openDetailCookie} />} />
            <Route path='/cookies' render={() => <CookieListPage openDetailCookie={openDetailCookie} />} />
          </Switch>
        </div>
        <Navigation />
        <CookieDetail
          open={cookieDetailOpen}
          setOpen={setCookieDetailOpen}
          cookieName={cookieDetailName}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
