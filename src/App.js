import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />;
        <Route path='/shop' component={Shop} />;
      </Switch>
    </div>
  );
}

export default App;
