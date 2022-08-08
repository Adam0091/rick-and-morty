import { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";

import { CharactersList } from "@components/CharactersPage/CharactersList";
import { CharactersFilters } from "@components/CharactersPage/CharactersFilters";
import { PageTemplate } from "@components/PageTemplate";

import { GET_CHARACTERS } from "@utils/network";
import { CharacterType, CharactersFilterOptionsType } from "@/types";

import logoCharacters from "@assets/images/logoCharacters.png";
import { CHARACTERS_OPTION } from "@constants/selectsOption";

export const CharactersPage = () => {
  const selectOptions = {
    species: CHARACTERS_OPTION.species,
    gender: CHARACTERS_OPTION.gender,
    status: CHARACTERS_OPTION.status,
  };
  // Фильтры для изменения списка персонажей
  const [filterOptions, setFilterOptions] =
    useState<CharactersFilterOptionsType>({
      name: "",
      species: "",
      gender: "",
      status: "",
    });

  const [items, setItems] = useState<CharacterType[]>([]);
  const [visible, setVisible] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const prevFilterOptions = useRef({ ...filterOptions });
  const nextPage = useRef(null);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage, filter: filterOptions },
  });

  const showMoreItems = () => {
    if (visible % 20 === 0) setCurrentPage((prevValue) => prevValue + 1);
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    if (data) {
      const characters = data.characters.results;
      nextPage.current = data.characters.info.next;
      const isFilterNotChange =
        JSON.stringify(prevFilterOptions.current) ===
        JSON.stringify(filterOptions);
      if (isFilterNotChange) {
        setItems([...items, ...characters]);
      } else {
        prevFilterOptions.current = { ...filterOptions };
        setItems(characters);
        setCurrentPage(1);
        setVisible(8);
      }
    }
  }, [data]);

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <PageTemplate
      FilterComponent={
        <CharactersFilters
          selectOption={selectOptions}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      }
      ListComponent={
        <CharactersList
          characters={items}
          visible={visible}
          loading={loading}
        />
      }
      logo={logoCharacters}
      logoAlt="rick and morty"
      showMoreItems={showMoreItems}
      disabled={nextPage.current === null || !data}
    />
  );
};
