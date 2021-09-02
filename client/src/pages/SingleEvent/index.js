import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Avatar, Button, TextField, Grid, div } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { makeStyles } from "@material-ui/core/styles";
import { SINGLE_EVENT } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import Auth from "../../utils/auth";
import './style.css';

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
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const ViewEvent = () => {
  const { eventId } = useParams();
  const { loading, data } = useQuery(SINGLE_EVENT, {
    variables: { eventId: eventId },
  });
  const classes = useStyles();

  const events =  data?.eventDetails || [];
  console.log(events);
  const [createEvent, { error }] = useMutation(ADD_COMMENT);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const mutationResponse = await createEvent({
        variables: {
          ...formData,
     
        },
      });

      console.log("Mutation Response ", mutationResponse);

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
    <div className="containerSingle">
    <div className="singleEvent">

      <div className="labels" component="h1" variant="h5">
        {events.title}
      </div>
      <div className="labels" component="h1" variant="h5">
        {events.description}
      </div>
      <div className="labels" component="h1" variant="h5">
        {events.locationName}
      </div>
      <div className="labels" component="h1" variant="h5">
        {events.locationAddress}
      </div>
      <div className="labels" component="h1" variant="h5">
        {events.locationZipCode}
      </div>
      <div className="labels" component="h1" variant="h5">
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(events.eventDate)}
      </div>
      <div className="labels" component="h1" variant="h5">
        12:00 AM
      </div>
      <div className="labels" component="h1" variant="h5">
        {/* Organizer: {events.organizer.username} */}
      </div>
      {/* <div className="labels" component="h1" variant="h5">
        {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(events.eventTime)}
      </div> */}
      <form noValidate onSubmit={handleFormSubmit}>
        <label>Comments</label>
        <input type="text" />
        <button type="button" />
      </form>
    </div>
    </div>
  );
};

export default ViewEvent;
