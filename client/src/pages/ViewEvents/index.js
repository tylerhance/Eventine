// import React, { useState } from "react";
// import "./style.css";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// // import { VIEW_EVENTS } from "../../utils/mutations";
// import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import CommentList from "./comment";
// import CommentForm from "./addComment";
// import EventModal from "./eventModal";
// import Camping from '../../assets/images/camping.jpeg';
// import Chess from '../../assets/images/chessclub.jpeg';
// import Coffee from '../../assets/images/coffee.jpeg'
// import { green } from '@material-ui/core/colors';
// import Radio from '@material-ui/core/Radio';
// import { QUERY_ME } from '../../utils/queries';
// import { useQuery } from '@apollo/client'; 
// import { useParams } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(3),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// const createCard = [];
//   {
//     img: `${Camping}`,
//     title: "Group Camping",
//     desc: "Join us at the Mt.Rainier campgrounds for some s'mores and hiking!",
//     modal: "Group Camping event"
//   },
//   {
//     img: `${Coffee}`,
//     title: "Coffee and Music",
//     desc: "Coffee Meet and Greet with live music.",
//     modal: "Coffee and Live Music"
//   },
//   {
//     img: `${Chess}`,
//     title: "Chess Club",
//     desc: "Summon your wits and join the weekly Chess tournaments held at the park.",
//     modal: "Chess Club -  "
//   },
// ];


// export default function Album() {
//   const classes = useStyles();
//   const { eventId } = useParams();

//   const {loading, data} = useQuery(QUERY_ME, {
//    variables: { eventId: eventId }, 
//   });
//   const userInfo = data?.event || {};

//   console.log("this is loading", loading)
//   console.log("this is data", userInfo);
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//         {/* Hero unit */}
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//               Events
//             </Typography>
//             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//             </Typography>
            
//           </Container>
//         </div>
//         <Container className={classes.cardGrid} maxWidth="lg">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image={card.img}
//                     title="Image Title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {card.title}
//                     </Typography>
//                     <Typography>
//                       {card.desc}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       <EventModal>{card.modal}
//                         </EventModal>
//                     </Button>
//                     <Button size="small" color="primary">
//                       Share
//                     </Button>
//                     <Button>
//                     <Radio color="green">RSVP</Radio>
//                     </Button>
//                     {"\n"}
//                   </CardActions>
//                   <CommentList><div>
//                       </div>
//                       </CommentList>
//                       <CommentForm>

//                       </CommentForm>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </React.Fragment>
//   );
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { ADD_EVENT } from '../../utils/mutations';
// import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';

// import Auth from '../../utils/auth';

// const EventForm = () => {
//   const [eventText, setEventText] = useState('');

//   const [characterCount, setCharacterCount] = useState(0);

//   const [addEvent, { error }] = useMutation(ADD_EVENT, {
//     update(cache, { data: { addEvent } }) {
//       try {
//         const { events } = cache.readQuery({ query: QUERY_EVENTS });

//         cache.writeQuery({
//           query: QUERY_EVENTS,
//           data: { events: [addEvent, ...events] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, events: [...me.events, addEvent] } },
//       });
//     },
//   });

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     locationName: "",
//     locationAddress: "",
//     locationZipCode: "",
//     eventDate: "",
//     eventTime: "",
//     organizer: Auth.getProfile().data._id,
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addEvent({
        
//         variables: {
//           ...formData,
//           title: formData.title,
//           description: formData.description,
//           locationName: formData.locationName,
//           locationAddress: formData.locationAddress,
//           locationZipCode: formData.locationZipCode,
//           eventDate: formData.eventDate,
//           eventTime: formData.eventTime,
//           organizer: Auth.getProfile().data.username,
//         },
//       });

//       setEventText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'eventText' && value.length <= 280) {
//       setEventText(value);
//       setCharacterCount(value.length);
//     }
//   };

//   return (
//     <div>
//       <h3>Events</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="eventText"
//                 placeholder="Events..."
//                 value={eventText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Event
//               </button>
//             </div>
//             {error && (
//               <div className="col-12 my-3 bg-danger text-white p-3">
//                 {error.message}
//               </div>
//             )}
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to share your events. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };

// export default EventForm;

import React from 'react';
import { useQuery } from '@apollo/client';

import EventList from '../../components/EvenList';
import EventForm from '../../components/EventForm';

import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';


const ViewEvent = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];



  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <EventForm /> */}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList
              events={events}
              title="Events"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default ViewEvent;



