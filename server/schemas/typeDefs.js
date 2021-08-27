const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
  }

  type Event {
    _id: ID
    title: String
    organizer: String
    createdAt: Date
    attendeesCount: Number
    location: [location]!
    comments: [comments]!
  }

  type location {
    name: String
    address: String
    zipCode: Number
  }

  

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
    events(username: String): [Event]
  }

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    comments(eventId: ID!): [Event]
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      username: String!
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    createEvent(title: String!, organizer: String!, location: [location]!): Event
    updateEvent(title: String, organizer: String, location: [location]): Event
    deleteEvent(eventId: ID!): Event
    addComment(eventId: ID!, commentText: String!, commentAuthor: String!): Event
    removeComment(eventId: ID!, commentId: ID!): Event
  }
  
`;

module.exports = typeDefs;
