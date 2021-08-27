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

// Organizer 
// Created @
  
  return (
    <div className="container">
      <form>

      <h1>Create New Event</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <TextField required id="title" label="Required" defaultValue="title" />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <TextField required id="location" label="Required" defaultValue="Joey's Restaurant" />
        </div>
        <div>
          <label htmlFor="email">Address:</label>
          <TextField required id="email-input" label="Required" defaultValue="800 Bellevue Way NE Ste 118" />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <TextField required id="zipcode-input" label="Required" defaultValue="98055" />
        </div>
        
        
        
      </form>
    </div>
  );
};

export default UserProfile;
