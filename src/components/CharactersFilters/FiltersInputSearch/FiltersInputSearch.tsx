import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "@/assets/images/searchIcon.svg";

export const FiltersInputSearch = ({
  filterOptions,
  setFilterOptions,
}: any) => {
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
