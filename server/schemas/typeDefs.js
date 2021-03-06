const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    events: [Event]
  }

  type Event {
    _id: ID
    title: String
    organizer: User
    createdAt: String
    attendeesCount: String
    locationName: String
    locationAddress: String
    locationZipCode: String
    description: String
    eventDate: String
    eventTime: String
    comments: [Comment]
  }

  type location {
    locationName: String
    locationAddress: String
    locationZipCode: String
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
    me: User
    users: [User]
    user(userId: ID!): User
    events: [Event]
    eventDetails(eventId: ID!): Event
    eventZip(locationZipCode: String!): [Event]
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

    createEvent(
      title: String
      organizer: String
      locationName: String
      locationAddress: String
      locationZipCode: String
      description: String
      eventDate: String
      eventTime: String
    ): Event

    updateEvent(
      eventId: ID!
      title: String
      organizer: String
      locationName: String
      locationAddress: String
      locationZipCode: String
      description: String
      eventDate: String
      eventTime: String
    ): Event

    deleteEvent(eventId: ID!): Event

    addComment(
      eventId: ID!
      commentText: String!
      commentAuthor: String!
    ): Event
    updateComment(eventId: ID!, commentId: ID!, commentText: String!): Event

    removeComment(eventId: ID!, commentId: ID!): Event
  }
`;

module.exports = typeDefs;
