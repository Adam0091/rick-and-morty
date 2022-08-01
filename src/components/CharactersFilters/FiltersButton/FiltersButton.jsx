import PropTypes from "prop-types";
import {
  WrapperFiltersButton,
  FiltersButtonStyle,
  FiltersButtonIcon,
} from "./FiltersButton.style";

import filterIcon from "./img/filterIcon.svg";

const FiltersButton = ({ isActive, setIsActive }) => {
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

FiltersButton.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default FiltersButton;
