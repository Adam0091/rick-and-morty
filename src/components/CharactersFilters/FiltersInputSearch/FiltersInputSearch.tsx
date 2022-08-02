import PropTypes from "prop-types";

import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "./img/searchIcon.svg";

const FiltersInputSearch = ({ filterOptions, setFilterOptions }: any) => {
  return (
    <WrapperInputSearch>
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
  );
};

FiltersInputSearch.propTypes = {
  filterOptions: PropTypes.object,
  setFilterOptions: PropTypes.func,
};

export default FiltersInputSearch;
