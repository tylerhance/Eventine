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
    createdAt: String
    attendeesCount: Int
    locationName: String
    locationAddress: String
    locationZipCode: Int
    description: String
    eventDate: String
    eventTime: String
    createdAt:String
    comments: [Comment]
  }

  type location {
    locationName: String
    locationAddress: String
    locationZipCode: Int
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
    events: [Event]
    eventDetails(eventId: ID!): Event
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

    createEvent( title: String, organizer: String, locationName: String, locationAddress: String, locationZipCode: Int, description: String, eventDate: String, eventTime: String, attendeesCount: Int): Event

    updateEvent(title: String, organizer: String, locationName: String, locationAddress: String, locationZipCode: Int, description: String, eventDate: String, eventTime: String): Event

    deleteEvent(eventId: ID!): Event

    addComment(eventId: ID!, commentText: String!, commentAuthor: String!): Event
    
    removeComment(eventId: ID!, commentId: ID!): Event
  }
  
`;

module.exports = typeDefs;
