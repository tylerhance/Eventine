import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
      }
    }
  }
`;



export const CREATE_EVENT = gql`
  mutation createEvent(
    $title: String!
    $description: String!
    $location: String!
    $address: String!
    $zipcode: String!
    $dateOfEvent: String!
    $timeOfEvent: String!
  ) {
    createEvent(
      title: $firstName
      description: $description
      location: $location
      address: $address
      zipcode: $zipcode
      dateOfEvent: $dateOfEvent
      timeOfEvent: $timeOfEvent
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $eventId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      eventId: $eventId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      eventText
      eventAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

// export const UPDATE_EVENT = gql``;