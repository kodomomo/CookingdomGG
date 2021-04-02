import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import { CookieDetail } from './components/cookieDetail';
import { DeckPage } from './pages';
import CookieListPage from './pages/CookieListPage'

const App = () => {
  const [cookieDetailOpen, setCookieDetailOpen] = useState(false);
  useEffect(() => {
    setTimeout(()=> setCookieDetailOpen(true), 1000);
  }, [])
  return (
    <BrowserRouter>
      <div className='webview__wrapper'>
        <div className='main'>
          <Switch>
            <Route path='/deck' component={DeckPage} />
            <Route path='/cookies' component={CookieListPage} />
          </Switch>
        </div>
        <Navigation />
        <CookieDetail open={cookieDetailOpen} setOpen={setCookieDetailOpen} cookieName={"슈크림맛 쿠키"}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
