import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "@/assets/images/searchIcon.svg";

export const FiltersInputSearch = ({ setFilterOptions }: any) => {
  const handleInputSearch = (e: any) => {
    setFilterOptions((filterOptions: any) => ({
      ...filterOptions,
      name: e.target.value,
    }));
  };

  return (
    <WrapperInputSearch>
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        placeholder="Filter by name..."
        onChange={handleInputSearch}
      />
    </WrapperInputSearch>
  );
};
