import React, { useState } from "react";
import "./style.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import { VIEW_EVENTS } from "../../utils/mutations";
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
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
import CommentList from "./comment";
import CommentForm from "./addComment";
import EventModal from "./eventModal";
import Camping from '../../assets/images/camping.jpeg';
import Chess from '../../assets/images/chessclub.jpeg';
import Coffee from '../../assets/images/coffee.jpeg'
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client'; 
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    img: `${Camping}`,
    title: "Group Camping",
    desc: "Join us at the Mt.Rainier campgrounds for some s'mores and hiking!",
    modal: "Group Camping event"
  },
  {
    img: `${Coffee}`,
    title: "Coffee and Music",
    desc: "Coffee Meet and Greet with live music.",
    modal: "Coffee and Live Music"
  },
  {
    img: `${Chess}`,
    title: "Chess Club",
    desc: "Summon your wits and join the weekly Chess tournaments held at the park.",
    modal: "Chess Club -  "
  },
];


export default function Album() {
  const classes = useStyles();
  const { eventId } = useParams();

  const {loading, data} = useQuery(QUERY_ME, {
   variables: { eventId: eventId }, 
  });
  const userInfo = data?.event || {};

  console.log("this is loading", loading)
  console.log("this is data", userInfo);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Events
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <EventModal>{card.modal}
                        </EventModal>
                    </Button>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button>
                    <Radio color="green">RSVP</Radio>
                    </Button>
                    {"\n"}
                  </CardActions>
                  <CommentList><div>
                      </div>
                      </CommentList>
                      <CommentForm>

                      </CommentForm>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}


