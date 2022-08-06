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

export const GET_LOCATIONS = gql`
  query LocationsList($ids: [ID!]!) {
    locationsByIds(ids: $ids) {
      id
      name
      type
      dimension
      residents {
        id
        name
        type
      }
      created
    }
  }
`;
export const GET_LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        id
        name
        image
        species
      }
    }
  }
`;
