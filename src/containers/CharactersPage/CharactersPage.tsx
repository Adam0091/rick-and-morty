import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CharactersList } from "@components/CharactersPage/CharactersList";
import { CharactersFilters } from "@components/CharactersPage/CharactersFilters";

import { GET_CHARACTERS } from "@utils/network";
import {
  CharacterType,
  CharactersFilterOptionsType,
  CharactersSelectOptionsType,
} from "@/types";

import logoCharacters from "@/assets/images/logoCharacters.png";
import { PageTemplate } from "@/components/PageTemplate";

export const CharactersPage = () => {
  //Хранит уникальные значение силектов
  const [selectOptions, setSelectOptions] =
    useState<CharactersSelectOptionsType>({
      species: [],
      gender: [],
      status: [],
    });
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
  const ids = new Array(826).fill(1).map((_, i) => i + 1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { ids },
    onCompleted: (data) => {
      setItems(data.charactersByIds);
      setSelectOptions({
        species: Array.from(
          new Set(
            data.charactersByIds.map(
              (chracter: CharacterType) => chracter.species
            )
          )
        ),
        gender: Array.from(
          new Set(
            data.charactersByIds.map(
              (chracter: CharacterType) => chracter.gender
            )
          )
        ),
        status: Array.from(
          new Set(
            data.charactersByIds.map(
              (chracter: CharacterType) => chracter.status
            )
          )
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
      result = result.filter((element: CharacterType) =>
        element.name.includes(filterOptions.name)
      );
    if (filterOptions.gender)
      result = result.filter(
        (element: CharacterType) => element.gender === filterOptions.gender
      );
    if (filterOptions.species)
      result = result.filter(
        (element: CharacterType) => element.species === filterOptions.species
      );
    if (filterOptions.status)
      result = result.filter(
        (element: CharacterType) => element.status === filterOptions.status
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
    <PageTemplate
      FilterComponent={
        <CharactersFilters
          selectOption={selectOptions}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      }
      ListComponent={<CharactersList characters={items} visible={visible} />}
      logo={logoCharacters}
      logoAlt="rick and morty"
      loading={loading}
      showMoreItems={showMoreItems}
    />
  );
};
