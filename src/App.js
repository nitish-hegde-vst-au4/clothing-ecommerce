import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninAndSignup from './pages/SigninAndSignup/SigninAndSignup';
import { auth, createProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  state = {
    currentUser: '',
  };

  unsubscribeUser = null;
  componentDidMount() {
    this.unsubscribeUser = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeUser();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />;
          <Route path='/shop' component={Shop} />;
          <Route path='/signin' component={SigninAndSignup} />;
        </Switch>
      </div>
    );
  }
}

export default App;
