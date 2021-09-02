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

export const QUERY_ME = gql `{
	me{
    events{
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
  query getEvents{
    events{
      _id
      description
      organizer {
        _id
        email
        username
      }
      eventDate
      eventTime
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
    }
  }
`;
