import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query CharactersList($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      species
      status
      gender
      image
    }
  }
`;
