import { gql } from "@apollo/client";

// export const UPDATE_USER = gql`
//   mutation updateUser()
// `;

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


export const ADD_EVENT = gql`
mutation addEvent (
  $title: String,
  $organizer: String,
  $locationName: String,
  $locationAddress: String,
  $locationZipCode: String,
  $eventTime:String,
  $eventDate:String,
  $description: String
  ) {
  createEvent (
    title: $title,
    organizer: $organizer,
    locationName: $locationName,
    locationAddress: $locationAddress,
    locationZipCode: $locationZipCode,
    description: $description,
    eventDate: $eventDate,
    eventTime: $eventTime,
    ) {
    _id,
    organizer
    attendeesCount
    comments {
      _id
      commentText
      commentAuthor
      createdAt
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

export const REMOVE_EVENT = gql`
  mutation deleteEvent($eventId: String!) {
    deleteEvent(bookId: $bookId) {
      _id
      title
      description
      locationName
      address
      zipCode
      eventTime
      eventDate
      organizer
      createdAt
      attendeesCount
      comments {
        _id
        commentText
        commentAuthor
        createAt
      }
    }
  }
`;
