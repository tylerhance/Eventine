import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Image from "../../assets/images/coffee.jpeg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Paper from "@material-ui/core/Paper";
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Auth from "../../utils/auth";
import BoardGame from "../../assets/images/boardgame.jpeg";
import Meditation from "../../assets/images/meditation.jpeg";
import Hiking from "../../assets/images/hiking.jpeg";
import Museum from "../../assets/images/museum.jpeg";
import Cooking from "../../assets/images/cooking.jpeg";
import OpenMic from "../../assets/images/openmic.jpeg";
import FarmersMarket from "../../assets/images/farmersmarket.jpeg";
import Yoga from "../../assets/images/yoga.jpeg";
import BookClub from "../../assets/images/bookclub.jpeg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="#ddba6b" href="https://material-ui.com/">
        Eventine
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  heroContent: {
    backgroundColor: theme.palette.background.grey,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function EventCategories(props) {
  const { classes } = props;
  
  const images = [
    {
      url:
        `${BoardGame}`,
      title: 'Game Night',
      width: '40%',
      
    },
    {
      url:
      `${Meditation}`,
      title: 'Meditation',
      width: '25%',
    },
    {
      url:
      `${Hiking}`,
      title: 'Hiking',
      width: '35%',
    },
    {
      url:
      `${Museum}`,
      title: 'Museum Tours',
      width: '38%',
    },
    {
      url:
      `${Cooking}`,
      title: 'Gastronomy',
      width: '38%',
    },
    {
      url:
      `${OpenMic}`,
      title: 'Open Mic Night',
      width: '24%',
    },
    {
      url:
      `${FarmersMarket}`,
      title: 'Farmers Market',
      width: '40%',
    },
    {
      url:
       `${Yoga}`,
      title: 'Fitness',
      width: '20%',
    },
    {
      url:
      `${BookClub}`,
      title: 'Book Club',
      width: '40%',
    },
  ];
  

  return (
    <Container className={classes.root} component="section">
      <CssBaseline />
      <div id="header" className={classes.heroContent}>
           <Container maxWidth="sm">
             <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
               Connect & Explore...
              
             </Typography>
             <Typography variant="h5" align="center" color="textSecondary" paragraph>
               With <span><strong><em>Eventine</em></strong></span> - A place to find, create, and experience local happenings with other like-minded people. Sign In or create an account
               to start traversing events in and around your location. 
             </Typography>
             <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button className={classes.heroButtons} component={Link} to="/login" variant="contained" color="primary">
                   Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.heroButtons} component={Link} to="/signup" variant="contained" color="primary">
                    Signup
                  </Button>
                </Grid>
              </Grid>
            </div>
            </Container>
             </div>
             
      <div className={classes.images}>
     
        {images.map((image) => (
          <ButtonBase
            component={Link} to="/viewevents"
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

EventCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCategories);
