import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    user {
      firstName
      lastName
      email
      username
    }
  }
`;

export const SINGLE_EVENT = gql`
  query getSingleThought($eventId: ID!) {
    eventDetails(eventId: $eventId) {
      _id
      title
      description
      locationName
      locationAddress
      locationZipCode
      organizer {
        username
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
      eventDate
      eventTime
    }
  }
`;



export const QUERY_COMMENTS = gql`
  query events {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }

//     }
//   }
// `;

export const QUERY_ME = gql`
  {
    me {
      events {
        _id
        title
        organizer
        createdAt
        attendeesCount
        locationName
        locationAddress
        locationZipCode
        description
        eventDate
        eventTime
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      description
      organizer {
        _id
        email
        username
      }
      eventDate
      eventTime
      title
      description
      locationName
    }
  }
`;
