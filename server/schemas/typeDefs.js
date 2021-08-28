const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
  }

  type Event {
    _id: ID
    title: String
    organizer: String
    createdAt: String
    attendeesCount: Int
    location: [location]!
    comments: [Comment]!
  }

  type location {
    name: String
    address: String
    zipCode: Int
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
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    events(username: String): [Event]
    eventQ(eventId: ID!): Event
    eventZip: Event
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
    createEvent(title: String!, organizer: String!, location: String!): Event
    updateEvent(title: String, organizer: String, location: String!): Event
    deleteEvent(eventId: ID!): Event
    addComment(
      eventId: ID!
      commentText: String!
      commentAuthor: String!
    ): Event
    removeComment(eventId: ID!, commentId: ID!): Event
  }
`;

module.exports = typeDefs;
