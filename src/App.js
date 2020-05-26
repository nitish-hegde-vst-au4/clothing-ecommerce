import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninAndSignup from './pages/SigninAndSignup/SigninAndSignup';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />;
        <Route path='/shop' component={Shop} />;
        <Route path='/signin' component={SigninAndSignup} />;
      </Switch>
    </div>
  );
}

export default App;
