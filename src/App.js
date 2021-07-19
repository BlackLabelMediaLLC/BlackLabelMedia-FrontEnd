import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      You are on main page.
      <Switch>
        <Route exact path='/'>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
