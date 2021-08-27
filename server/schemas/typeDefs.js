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
<<<<<<< HEAD
    createdAt: String
    attendeesCount: Int
    location: [location]!
    comments: [comment]!
=======
    createdAt: Date
    attendeesCount: Number
    location: [location]!
    comments: [Comment]!
>>>>>>> Mohamed
  }

  type location {
    name: String
    address: String
<<<<<<< HEAD
    zipCode: Int
  }

  type comments {
=======
    zipCode: Number
  }

  

  type Comment {
    _id: ID
>>>>>>> Mohamed
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
    eventQ(eventId: ID!): Event
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
