export type SelectType = {
  label: string;
  option: string[];
  value: string;
  type: string;
};

// Characters
export type CharacterType = {
  id: number | string;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
};

export type CharactersFilterOptionsType = {
  name: string;
  species: string;
  gender: string;
  status: string;
};

export type CharactersSelectOptionsType = {
  [Properties in keyof CharactersSelectValuesType]: string[];
};

export type CharactersSelectValuesType = {
  species: string;
  gender: string;
  status: string;
};

export type HeaderCharacterType = {
  name: string;
  image: string;
};

export type InfoCharacterType = {
  [key: string]: {
    isLink?: boolean;
    value: string;
    path?: string;
  };
};

//Locations
export type LocationType = {
  id: number | string;
  name: string;
  type: string;
  dimension: string;
};

export type LocationFilterOptionsType = {
  name: string;
  type: string;
  dimension: string;
};

export type LocationsSelectOptionsType = {
  [Properties in keyof LocationSelectValuesType]: string[];
};

export type LocationSelectValuesType = {
  type: string;
  dimension: string;
};

// Episode

export type EpisodeType = {
  id: string | number;
  name: string;
  air_date: string;
  episode: string;
};
