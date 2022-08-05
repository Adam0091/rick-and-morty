import { useState } from "react";

import { Shadow } from "@components/UI-Kit/Shadow";
import { FiltersButton } from "@UI-Kit/FiltersButton";
import { FiltersInputSearch } from "@UI-Kit/FiltersInputSearch";
import { FiltersSelects } from "@UI-Kit/FiltersSelects/FiltersSelects";

import { FiltersWrapper } from "./CharactersFilters.style";
import {
  CharactersFilterOptionsType,
  CharactersSelectOptionsType,
  CharactersSelectValuesType,
} from "@/types";

type TProps = {
  selectOption: CharactersSelectOptionsType;
  filterOptions: CharactersFilterOptionsType;
  setFilterOptions: React.Dispatch<
    React.SetStateAction<CharactersFilterOptionsType>
  >;
};

export const CharactersFilters = ({
  selectOption,
  filterOptions,
  setFilterOptions,
}: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const [values, setValues] = useState<CharactersSelectValuesType>({
    species: null,
    gender: null,
    status: null,
  });

  const selects = [
    {
      label: "Species",
      option: selectOption.species,
      value: values.species,
      type: "species",
    },
    {
      label: "Gender",
      option: selectOption.gender,
      value: values.gender,
      type: "gender",
    },
    {
      label: "Status",
      option: selectOption.status,
      value: values.status,
      type: "status",
    },
  ];

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions((filterOptions: CharactersFilterOptionsType) => ({
      ...filterOptions,
      name: e.target.value,
    }));
  };

  const handleSelect = (value: string | null, type: string) => {
    if (window.innerWidth > 767) {
      setValues((values: CharactersSelectValuesType) => ({
        ...values,
        [type]: value,
      }));
      setFilterOptions((filterOptions: CharactersFilterOptionsType) => ({
        ...filterOptions,
        [type]: value,
      }));
    } else {
      setValues((values: CharactersSelectValuesType) => ({
        ...values,
        [type]: value,
      }));
    }
  };

  const handleApplyButton = () => {
    document.body.classList.toggle("block_scroll");
    setIsActive((isActive: boolean) => !isActive);
    setFilterOptions((filterOptions: CharactersFilterOptionsType) => ({
      ...filterOptions,
      ...values,
    }));
  };

  const onCloseSelects = () => {
    document.body.classList.toggle("block_scroll");
    setIsActive((isActive: boolean) => !isActive);
    setValues({
      species: filterOptions.species,
      gender: filterOptions.gender,
      status: filterOptions.status,
    });
  };

  return (
    <>
      <Shadow isActive={isActive} setIsActive={setIsActive} />
      <FiltersWrapper>
        <FiltersInputSearch handleInputSearch={handleInputSearch} />
        <FiltersButton setIsActive={setIsActive} />
        <FiltersSelects
          selects={selects}
          isActive={isActive}
          handleSelect={handleSelect}
          handleApplyButton={handleApplyButton}
          onCloseSelects={onCloseSelects}
        />
      </FiltersWrapper>
    </>
  );
};
