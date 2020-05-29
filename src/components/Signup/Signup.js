import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createProfileDocument } from '../../firebase/firebase.utils';
import './Signup.scss';
class Signup extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) return alert('Password do not match!');
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    try {
      await createProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('error ', error);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            placeholder='Display Name'
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm Password'
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
export default Signup;
