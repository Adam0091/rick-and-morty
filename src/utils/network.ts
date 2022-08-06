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

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
        type
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;
