import { WrapperInputSearch } from "./FiltersInputSearch.style";

import searchIcon from "@assets/images/searchIcon.svg";

type TProps = {
  handleInputSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxWidth?: string;
};

export const FiltersInputSearch = ({
  handleInputSearch,
  maxWidth,
  placeholder,
}: TProps) => (
  <WrapperInputSearch maxWidth={maxWidth}>
    <img src={searchIcon} alt="search icon" />
    <input type="text" placeholder={placeholder} onChange={handleInputSearch} />
  </WrapperInputSearch>
);
