import { useState } from "react";

import { Shadow } from "@components/UI-Kit/Shadow";
import { FiltersButton } from "./FiltersButton";
import { FiltersInputSearch } from "./FiltersInputSearch";
import { FiltersSelects } from "./FiltersSelects/FiltersSelects";

import { FiltersWrapper } from "./CharactersFilters.style";
import {
  FilterOptionsType,
  SelectOptionsType,
  SelectValuesType,
} from "@/types";

type TProps = {
  selectOption: SelectOptionsType;
  filterOptions: FilterOptionsType;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptionsType>>;
};

export const CharactersFilters = ({
  selectOption,
  filterOptions,
  setFilterOptions,
}: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const [values, setValues] = useState<SelectValuesType>({
    species: null,
    gender: null,
    status: null,
  });

  return (
    <>
      <Shadow isActive={isActive} setIsActive={setIsActive} />
      <FiltersWrapper>
        <FiltersInputSearch setFilterOptions={setFilterOptions} />
        <FiltersButton setIsActive={setIsActive} />
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
