import React from "react";
import "./style.css";
// import { Button } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.primary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className='footer-div'>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>
          <ul className='ul-accounts'>
            <li className='footer-user-contact'>Chris Abiva</li>
            <li>
              <a className='footer-link'  href='mailto:chrisabiva@hotmail.com'>
                <span> <EmailIcon /> </span>
                chrisabiva@hotmail.com
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://github.com/chabivz'>
                <span> <GitHubIcon /> </span>
                @chabivz
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://www.linkedin.com/in/chrisabiva/'>
                  <span className='footer-icons'> <LinkedInIcon /> </span>
                  https://www.linkedin.com/in/chrisabiva
                </a>
            </li>
          </ul>
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>
          <ul className='ul-accounts'>
            <li className='footer-user-contact'>Danny Roubin</li>
            <li>
              <a className='footer-link'  href='mailto:dannyroubin1@gmail.com'>
                <span> <EmailIcon /> </span>
                dannyroubin1@gmail.com
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://github.com/chabivz'>
                <span> <GitHubIcon /> </span>
                @DannyRoubin
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://www.linkedin.com/in/danielroubin/'>
                  <span className='footer-icons'> <LinkedInIcon /> </span>
                  @in/danielroubin/
                </a>
            </li>
          </ul>
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>
          <ul className='ul-accounts'>
            <li className='footer-user-contact'>Tyler Hance</li>
            <li>
              <a className='footer-link'  href='mailto:tyler.hance@gmail.com'>
                <span> <EmailIcon /> </span>
                tyler.hance@gmail.com
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://github.com/tylerhance'>
                <span> <GitHubIcon /> </span>
                @tylerhance
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://www.linkedin.com/in/tyler-hance/'>
                  <span className='footer-icons'> <LinkedInIcon /> </span>
                  @in/tyler-hance
                </a>
            </li>
          </ul>
          </Paper>
        </div>
        <div style={{ gridColumnEnd: "span 3" }}>
          <Paper className={classes.paper}>
          <ul className='ul-accounts'>
            <li className='footer-user-contact'>Mohamed Bassiouni</li>
            <li>
              <a className='footer-link'  href='mailto:mohamed@bassiouni.com'>
                <span> <EmailIcon /> </span>
                mohamed@bassiouni.com
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://github.com/MohamedB-01'>
                <span> <GitHubIcon /> </span>
                @MohamedB-01
              </a>
            </li>
            <li>
              <a className='footer-link' href='https://www.linkedin.com/in/mohamed-bassiouni-mba-55a8a8a3/'>
                  <span className='footer-icons'> <LinkedInIcon /> </span>
                  @mohamed-bassiouni
                </a>
            </li>
          </ul>
          </Paper>
        </div>

      </div>
    </div>
  );
};

export default Footer;
