import {
  WrapperFiltersButton,
  FiltersButtonStyle,
  FiltersButtonIcon,
} from "./FiltersButton.style";

import filterIcon from "@/assets/images/filterIcon.svg";

export const FiltersButton = ({ setIsActive }: any) => {
  const handleButton = () => {
    setIsActive((isActive: boolean) => !isActive);
  };

  return (
    <WrapperFiltersButton onClick={handleButton}>
      <FiltersButtonStyle>
        <FiltersButtonIcon>
          <img src={filterIcon} alt="filter icon" />
        </FiltersButtonIcon>
        ADVANCED FILTERS
      </FiltersButtonStyle>
    </WrapperFiltersButton>
  );
};
