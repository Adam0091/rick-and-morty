import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "@assets/images/searchIcon.svg";

type TProps = {
  handleInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FiltersInputSearch = ({ handleInputSearch }: TProps) => (
  <WrapperInputSearch>
    <img src={searchIcon} alt="search icon" />
    <input
      type="text"
      placeholder="Filter by name..."
      onChange={handleInputSearch}
    />
  </WrapperInputSearch>
);
