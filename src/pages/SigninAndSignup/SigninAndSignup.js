import React from 'react';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';
import './SigninAndSignup.scss';

const SigninAndSignup = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninAndSignup;
