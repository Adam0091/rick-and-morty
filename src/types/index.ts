export type SelectType = {
  label: string;
  option: string[];
  value: string;
  type: string;
};

// Characters
export type CharacterType = {
  id: number | string;
} & CharactersSelectValuesType &
  HeaderCharacterType;

export type CharactersFilterOptionsType = {
  name: string;
} & CharactersSelectValuesType;

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
} & LocationSelectValuesType;

export type LocationFilterOptionsType = {
  name: string;
} & LocationSelectValuesType;

export type LocationsSelectOptionsType = {
  [Properties in keyof LocationSelectValuesType]: string[];
};

export type LocationSelectValuesType = {
  type: string;
  dimension: string;
};

//Location
export type HeaderLocationType = {
  name: string;
} & LocationSelectValuesType;

// Episode
export type EpisodeType = {
  id: string | number;
  name: string;
  air_date: string;
  episode: string;
};
