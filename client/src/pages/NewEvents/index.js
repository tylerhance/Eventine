import React, { useState } from "react";
import { useMutation } from "@apollo/client";
<<<<<<< HEAD
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
=======
import { Avatar, Button, TextField, Grid, Typography } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { makeStyles } from "@material-ui/core/styles";
>>>>>>> develop
import { ADD_EVENT } from "../../utils/mutations";
import Auth from "../../utils/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EventForm() {
  const classes = useStyles();
  const [createEvent, { error }] = useMutation(ADD_EVENT);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    locationName: "",
<<<<<<< HEAD
    address: "",
    zipcode: "",
    organizer: "",
    eventDate: "2021-08-25",
    eventTime: "21:00:00"
=======
    locationAddress: "",
    locationZipCode: "",
    eventDate: "",
    eventTime: "",
    organizer: Auth.getProfile().data._id,
>>>>>>> develop
  });


<<<<<<< HEAD
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("test");
      const {data} = await createEvent({
        variables: {
          ...formData
        },
      });
      console.log(data);
    
  
  }
=======
      
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      console.log("'Clicked' handleFormSubmit");
      console.log(' Auth.getProfile().data.username = ', Auth.getProfile().data._id)
      console.log(formData)
      console.log(formData.title)
      console.log(formData.description)
      console.log('eventDate ', formData.eventDate)
      const userId = Auth.getProfile().data._id; 
      console.log(`UserId ${userId}`);
      const mutationResponse = await createEvent({
        
        variables: {
          ...formData,
          // title: formData.title,
          // description: formData.description,
          // locationName: formData.locationName,
          // locationAddress: formData.locationAddress,
          // locationZipCode: formData.locationZipCode,
          // eventDate: formData.eventDate,
          // eventTime: formData.eventTime,
          // organizer: userId
        },
      });

      console.log('Mutation Response ' + mutationResponse);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, 
      
      [name]: value,
    });
  };

>>>>>>> develop
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <EventNoteIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create New Event
      </Typography>
      <form noValidate onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="title"
              name="title"
              variant="outlined"
              required
              fullWidth
              id="title"
              label="Event Title"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="locationName"
              label="Location Name"
              name="locationName"
              autoComplete="locationName"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="locationAddress"
              label="Address"
              name="locationAddress"
              autoComplete="address"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="locationZipCode"
              label="Zipcode"
              pattern="[0-9]*"
              type="number"
              value={formData.locationZipCode}
              name="locationZipCode"
              autoComplete="zipcode"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="eventDate"
              label="Event Date"
              type="date"
              name="eventDate"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="eventTime"
              label="Event Time"
              type="number"
              className={classes.textField}
              name="eventTime"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create New Event
        </Button>
      </form>
    </div>
  );
}
