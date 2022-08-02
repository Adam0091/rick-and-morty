import { useState } from "react";

import { Shadow } from "../UI-Kit/Shadow";
import { FiltersButton } from "./FiltersButton";
import { FiltersInputSearch } from "./FiltersInputSearch";
import { FiltersSelects } from "./FiltersSelects/FiltersSelects";

import { FiltersWrapper } from "./CharactersFilters.style";

export const CharactersFilters = ({
  selectOption,
  filterOptions,
  setFilterOptions,
}: any) => {
  const [isActive, setIsActive] = useState(false);
  const [values, setValues] = useState({
    species: null,
    gender: null,
    status: null,
  });

  return (
    <>
      <Shadow isActive={isActive} setIsActive={setIsActive} />
      <FiltersWrapper>
        <FiltersInputSearch
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <FiltersButton isActive={isActive} setIsActive={setIsActive} />
        <FiltersSelects
          values={values}
          setValues={setValues}
          selectOption={selectOption}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </FiltersWrapper>
    </>
  );
};
