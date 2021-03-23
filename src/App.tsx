import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import { DeckPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='webview__wrapper'>
        <div className='main'>
          <Switch>
            <Route path='/deck' component={DeckPage} />
          </Switch>
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
