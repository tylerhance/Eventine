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
