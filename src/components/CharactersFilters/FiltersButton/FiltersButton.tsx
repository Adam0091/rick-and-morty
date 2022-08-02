import {
  WrapperFiltersButton,
  FiltersButtonStyle,
  FiltersButtonIcon,
} from "./FiltersButton.style";

import filterIcon from "./img/filterIcon.svg";

export const FiltersButton = ({ isActive, setIsActive }: any) => {
  return (
    <WrapperFiltersButton onClick={() => setIsActive(!isActive)}>
      <FiltersButtonStyle>
        <FiltersButtonIcon>
          <img src={filterIcon} alt="filter icon" />
        </FiltersButtonIcon>
        ADVANCED FILTERS
      </FiltersButtonStyle>
    </WrapperFiltersButton>
  );
};
