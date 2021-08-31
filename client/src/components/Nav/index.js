import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import "./style.css";

function Nav() {
  function showNavigation() {


    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/createnewevents">Create New Event</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/viewevents">View Events</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link id="signupTab" to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="events"></span>
          Eventine
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

