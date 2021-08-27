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
    attendeesCount: Integer
    location: [location]!
    comments: [comment]!
  }

  type location {
    name: String
    address: String
    zipCode: Integer
  }

  type comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: Date
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
    addEvent(title: String!): Event
    addComment(eventId: ID!, commentText: String!): Event
    removeEvent(eventId: ID!): Event
    removeComment(eventId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
