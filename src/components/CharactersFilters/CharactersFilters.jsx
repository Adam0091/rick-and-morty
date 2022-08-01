import { useState } from "react";
import PropTypes from "prop-types";

import Shadow from "../UI-Kit/Shadow";
import FiltersButton from "./FiltersButton";
import FiltersInputSearch from "./FiltersInputSearch";
import FiltersSelects from "./FiltersSelects/FiltersSelects";

import { FiltersWrapper } from "./CharactersFilters.style";

const CharactersFilters = ({
  selectOption,
  filterOptions,
  setFilterOptions,
}) => {
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

CharactersFilters.propTypes = {
  selectOption: PropTypes.object,
  filterOptions: PropTypes.object,
  setFilterOptions: PropTypes.func,
};

export default CharactersFilters;
