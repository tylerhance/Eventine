import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import { UPDATE_USER } from "../../utils/mutations";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function UserProfile() {
  const classes = useStyles();
  // const [updateUser, { error }] = useMutation(UPDATE_USER);

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              User Profile
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} className="userAndZipcode">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  First and Last Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Username
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Update User
              </Button>
            </CardActions>
          </Card>
          <hr className="divider"></hr>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Search for Available Event
                </Typography>
                <CardActions>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Zipcode"
                    name="description"
                    autoComplete="98056"
                    onChange={handleChange}
                  />
                </CardActions>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">Search by Zipcode</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Upcoming Event Grid */}
        <Grid item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <span className="N28">Upcoming Events</span>
          </Paper>
          <Paper className={classes.paper}>
            <span className="N26">
              <a href="#">Sushi Class</a>
            </span>
          </Paper>
          <Paper className={classes.paper}>
            <span className="N26">
              <a href="#">Zumba Class</a>
            </span>
          </Paper>
          <Paper className={classes.paper}>
            <span className="N26">
              <a href="#">Cycling Class</a>
            </span>
          </Paper>
          <Paper className={classes.paper}>
            <span className="N26">
              <a href="#">Trapeze Class</a>
            </span>
          </Paper>
        </Grid>
        {/* My Event Grid */}
        <Grid className="myEvents" item xs={4} sm={4}>
          <Paper className={classes.paper}>
            <span className="N28">My Events</span>
          </Paper>
          <Paper className={classes.paper}>
            <span className="N26">
              <a href="#">Trapeze Class</a>
            </span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
