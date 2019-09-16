import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

//because we need to store the user input in this component as state it needs to be a class component
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName:'',
      email: '',
      password: '',
      confirm: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirm} = this.state;
    if (password === confirm) {

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});

        this.setState({
          displayName:'',
          email: '',
          password: '',
          confirm: ''
        })
      }

      catch(error) {
          console.log(error, 'could not create new user!');
      }

    } else {
        alert('Passwords do not match!');
        return;
      }
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>
          I do not have an account
        </h2>
        <span>
          Sign up with your email
        </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='displayName' handleChange={this.handleChange} value={this.state.displayName} label='Display Name' required/>
          <FormInput name='email' handleChange={this.handleChange} type='email' value={this.state.email} label='Email' required/>
          <FormInput name='password' handleChange={this.handleChange} type='password' value={this.state.password} label='Password' required/>
          <FormInput name='confirm' handleChange={this.handleChange} type='password' value={this.state.confirm} label='Confirm' required/>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;