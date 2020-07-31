import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninAndSignup from './pages/SigninAndSignup/SigninAndSignup';
import Checkout from './pages/Checkout/Checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selectors';
import { checkUserSession } from './Redux/user/userActions';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.checkUserSession();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />;
          <Route path='/shop' component={Shop} />;
          <Route path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={(props) =>
              currentUser ? (
                props.history.goBack()
              ) : (
                <SigninAndSignup {...props} />
              )
            }
          />
          ;
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  checkUserSession,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
