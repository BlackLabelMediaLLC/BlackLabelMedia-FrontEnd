import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className='App'>
      <Navigation/> 
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact>
          <NoMatch/>
        </Route>
      </Switch>
    </div>
  
  );
}

export default App;
