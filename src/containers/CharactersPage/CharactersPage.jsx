import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Container } from "@components/Container/Container";
import CharactersList from "@components/CharactersList";

import { GET_CHARACTERS } from "@utils/network";

import {
  ButtonStyle,
  ButtonWrapper,
  FiltersWrapper,
  LogoWrapper,
  WrapperInputSearch,
} from "./CharactersPage.style";

import logoCharacters from "./img/logo.png";
import searchIcon from "./img/searchIcon.svg";

const CharactersPage = () => {
  // const [speciesOption, setSpeciesOption] = useState([]);
  // const [genderOption, setGenderOption] = useState([]);
  // const [statusOption, setStatusOption] = useState([]);

  const [selectOption, setSelectOption] = useState({
    species: [],
    gender: [],
    status: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    name: null,
    species: null,
    gender: null,
    status: null,
  });

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const ids = new Array(826).fill().map((_, i) => i + 1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { ids },
    onCompleted: (data) => {
      setItems(data.charactersByIds);

      const originalSpecies = new Set(
        data.charactersByIds.map((chracter) => chracter.species)
      );
      const originalGender = new Set(
        data.charactersByIds.map((chracter) => chracter.gender)
      );
      const originalStatus = new Set(
        data.charactersByIds.map((chracter) => chracter.status)
      );
      setSelectOption({
        species: [...originalSpecies],
        gender: [...originalGender],
        status: [...originalStatus],
      });
    },
  });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const filter = () => {
    if (loading) return;

    let result = data.charactersByIds;

    if (filterOptions.name)
      result = result.filter((element) =>
        element.name.includes(filterOptions.name)
      );
    if (filterOptions.gender)
      result = result.filter(
        (element) => element.gender === filterOptions.gender
      );
    if (filterOptions.species)
      result = result.filter(
        (element) => element.species === filterOptions.species
      );
    if (filterOptions.status)
      result = result.filter(
        (element) => element.status === filterOptions.status
      );

    setItems(result);
  };

  useEffect(() => {
    filter();
  }, [filterOptions]);

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <Container>
      <LogoWrapper className="logo__wrapper">
        <img src={logoCharacters} alt="rick and morty" />
      </LogoWrapper>

      <div className="content">
        <FiltersWrapper>
          <WrapperInputSearch className="wrapper__input_search">
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              placeholder="Filter by name..."
              onChange={(e) => {
                setFilterOptions({
                  ...filterOptions,
                  name: e.target.value,
                });
              }}
            />
          </WrapperInputSearch>

          <Autocomplete
            disablePortal
            options={selectOption.species}
            sx={{ width: 240 }}
            onInputChange={(_, newInputValue) => {
              setFilterOptions({
                ...filterOptions,
                species: newInputValue,
              });
            }}
            renderInput={(params) => <TextField {...params} label="Species" />}
          />
          <Autocomplete
            disablePortal
            options={selectOption.gender}
            sx={{ width: 240 }}
            onInputChange={(_, newInputValue) => {
              setFilterOptions({
                ...filterOptions,
                gender: newInputValue,
              });
            }}
            renderInput={(params) => <TextField {...params} label="Gender" />}
          />
          <Autocomplete
            disablePortal
            options={selectOption.status}
            sx={{ width: 240 }}
            onInputChange={(_, newInputValue) => {
              setFilterOptions({
                ...filterOptions,
                status: newInputValue,
              });
            }}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
        </FiltersWrapper>
        {loading ? (
          <Container>
            <CircularProgress />
          </Container>
        ) : (
          <CharactersList characters={items} visible={visible} />
        )}

        <ButtonWrapper className="content__btn">
          <ButtonStyle onClick={showMoreItems}>LOAD MORE</ButtonStyle>
        </ButtonWrapper>
      </div>
    </Container>
  );
};

export default CharactersPage;
