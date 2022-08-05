export type SelectType = {
  label: string;
  option: string[];
  value: string | null;
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
  name: null | string;
  species: null | string;
  gender: null | string;
  status: null | string;
};

export type CharactersSelectOptionsType = {
  species: string[] | [];
  gender: string[] | [];
  status: string[] | [];
};

export type CharactersSelectValuesType = {
  species: null | string;
  gender: null | string;
  status: null | string;
};

export type HeaderCharacterType = {
  name: null | string;
  image: null | string;
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
  name: null | string;
  type: null | string;
  dimension: null | string;
};

export type LocationsSelectOptionsType = {
  type: string[] | [];
  dimension: string[] | [];
};

export type LocationSelectValuesType = {
  type: null | string;
  dimension: null | string;
};
