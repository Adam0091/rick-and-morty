import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

import { Container } from "@components/Container/Container";
import CharactersList from "@components/CharactersList";
import CharactersFilters from "@components/CharactersFilters";

import { GET_CHARACTERS } from "@utils/network";

import {
  ButtonStyle,
  ButtonWrapper,
  CircularContainer,
  Content,
  LogoWrapper,
} from "./CharactersPage.style";

import logoCharacters from "./img/logo.png";

const CharactersPage = () => {
  //Хранит уникальные значение силектов
  const [selectOptions, setSelectOptions] = useState({
    species: [],
    gender: [],
    status: [],
  });
  // Фильтры для изменения списка персонажей
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
      setSelectOptions({
        species: Array.from(
          new Set(data.charactersByIds.map((chracter) => chracter.species))
        ),
        gender: Array.from(
          new Set(data.charactersByIds.map((chracter) => chracter.gender))
        ),
        status: Array.from(
          new Set(data.charactersByIds.map((chracter) => chracter.status))
        ),
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

    setVisible(8);
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
      <div>
        <LogoWrapper>
          <img src={logoCharacters} alt="rick and morty" />
        </LogoWrapper>

        <Content>
          <CharactersFilters
            selectOption={selectOptions}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />

          {loading ? (
            <CircularContainer>
              <CircularProgress />
            </CircularContainer>
          ) : (
            <CharactersList characters={items} visible={visible} />
          )}

          <ButtonWrapper>
            <ButtonStyle onClick={showMoreItems}>LOAD MORE</ButtonStyle>
          </ButtonWrapper>
        </Content>
      </div>
    </Container>
  );
};

export default CharactersPage;
