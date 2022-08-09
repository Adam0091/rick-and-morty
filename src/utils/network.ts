import { gql } from "@apollo/client";
// Character
export const GET_CHARACTERS = gql`
  query CharactersPage($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        status
        gender
        image
      }
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

// Location
export const GET_LOCATIONS = gql`
  query LocationsList($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        next
      }
      results {
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

// Episode
export const GET_EPISODES = gql`
  query EpisodesPage($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        next
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          type
        }
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        image
        name
        type
      }
    }
  }
`;
