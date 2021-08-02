import React from 'react';
import { RecoilRoot } from 'recoil';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className='px-3 py-5 pb-10 bg-gray-900'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/matches' component={Matches} />
            <Redirect from='*' to='/home' />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
