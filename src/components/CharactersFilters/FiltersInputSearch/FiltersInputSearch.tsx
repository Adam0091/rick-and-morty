import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "@/assets/images/searchIcon.svg";
import { FilterOptionsType } from "@/types";

type TProps = {
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptionsType>>;
};

export const FiltersInputSearch = ({ setFilterOptions }: TProps) => {
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions((filterOptions: FilterOptionsType) => ({
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
