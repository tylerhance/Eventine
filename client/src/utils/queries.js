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
  query getComments {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;