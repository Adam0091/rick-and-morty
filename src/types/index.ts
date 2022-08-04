export type CharacterType = {
  id: number | string;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
};

export type FilterOptionsType = {
  name: null | string;
  species: null | string;
  gender: null | string;
  status: null | string;
};

export type SelectOptionsType = {
  species: string[] | [];
  gender: string[] | [];
  status: string[] | [];
};

export type SelectValuesType = {
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
