import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ADD_EVENT } from "../../utils/mutations";

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
    address: "",
    zipcode: "",
    eventDate: "",
    eventTime: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      console.log("test");
      const mutationResponse = await createEvent({
        variables: {
          title: formData.title,
          description: formData.description,
          locationName: formData.locationName,
          locationAddress: formData.locationAddress,
          locationZipCode: formData.locationZipCode,
          eventDate: formData.eventDate,
          eventTime: formData.eventTime,
        },
      });

      console.log(mutationResponse);
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
              id="address"
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
              id="zipcode"
              label="Zipcode"
              name="locationZipCode"
              autoComplete="zipcode"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
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
              id="time"
              label="Event Time"
              type="time"
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
