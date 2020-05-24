import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />;
      <Route path='/shop' component={Shop} />;
    </Switch>
  );
}

export default App;
