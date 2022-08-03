import {
  WrapperFiltersButton,
  FiltersButtonStyle,
  FiltersButtonIcon,
} from "./FiltersButton.style";

import filterIcon from "@assets/images/filterIcon.svg";

type TProps = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FiltersButton = ({ setIsActive }: TProps) => {
  const handleButton = () => {
    document.body.classList.toggle("block_scroll");
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
