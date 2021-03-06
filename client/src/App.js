import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import NewEvents from "./pages/NewEvent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import "./index.css";
import Footer from "./components/Footer";
import UserProfile from "./pages/UserProfile";
import ViewEvents from "./pages/ViewEvents";
import EvenList from "./components/EvenList";
import SingleEvent from "./pages/SingleEvent";
import EventForm from "./components/EventForm";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() { 
  return (
    <ApolloProvider client={client}>
      <Router>
        <div >
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/createnewevents" component={NewEvents} />
            <Route exact path="/viewevents" component={ViewEvents} />
            <Route exact path="/event/:eventId" component={SingleEvent} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
