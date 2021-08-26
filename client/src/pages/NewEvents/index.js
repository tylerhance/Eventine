import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const UserProfile = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   const mutationResponse = await addUser({
  //     variables: {
  //       email: formState.email,
  //       password: formState.password,
  //       firstName: formState.firstName,
  //       lastName: formState.lastName,
  //     },
  //   });


  
  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <TextField required id="first-name" label="Required" defaultValue="First Name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <TextField required id="last-name" label="Required" defaultValue="Last Name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <TextField required id="email-input" label="Required" defaultValue="Email" />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          />  
        </div>
        
        
      </form>
    </div>
  );
};

export default UserProfile;
