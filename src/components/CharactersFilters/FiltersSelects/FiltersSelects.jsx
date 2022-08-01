import PropTypes from "prop-types";

import Select from "./../../UI-Kit/Select/Select";

import {
  ApplyButton,
  SelectHeaderCross,
  SelectsHeaderTitle,
  WrapperApplyButton,
  WrapperSelects,
  WrapperSelectsHeader,
} from "./FiltersSelects.style";

import crossIcon from "./img/crossIcon.svg";

const FiltersSelects = ({
  values,
  setValues,
  selectOption,
  filterOptions,
  setFilterOptions,
  isActive,
  setIsActive,
}) => {
  const selects = [
    {
      label: "Species",
      option: selectOption.species,
      value: values.species,
      type: "species",
    },
    {
      label: "Gender",
      option: selectOption.gender,
      value: values.gender,
      type: "gender",
    },
    {
      label: "Status",
      option: selectOption.status,
      value: values.status,
      type: "status",
    },
  ];

  const handleSelect = (value, type) => {
    if (window.innerWidth > 767) {
      setValues({
        ...values,
        [type]: value,
      });
      setFilterOptions({
        ...filterOptions,
        [type]: value,
      });
    } else {
      setValues({
        ...values,
        [type]: value,
      });
    }
  };

  const handleApplyButton = () => {
    setIsActive(!isActive);
    setFilterOptions({
      ...filterOptions,
      ...values,
    });
  };

  const onCloseSelects = () => {
    setIsActive(!isActive);
    setValues({
      species: filterOptions.species,
      gender: filterOptions.gender,
      status: filterOptions.status,
    });
  };

  return (
    <WrapperSelects isActive={isActive}>
      <WrapperSelectsHeader>
        <SelectsHeaderTitle>Filters</SelectsHeaderTitle>
        <SelectHeaderCross onClick={() => onCloseSelects(!isActive)}>
          <img src={crossIcon} alt="cross" />
        </SelectHeaderCross>
      </WrapperSelectsHeader>

      {selects.map((select) => (
        <Select
          key={select.label}
          options={select.option}
          label={select.label}
          value={select.value}
          setValue={(value) => handleSelect(value, select.type)}
        />
      ))}

      <WrapperApplyButton>
        <ApplyButton onClick={handleApplyButton}>Apply</ApplyButton>
      </WrapperApplyButton>
    </WrapperSelects>
  );
};

FiltersSelects.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  selectOption: PropTypes.object,
  filterOptions: PropTypes.object,
  setFilterOptions: PropTypes.func,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func,
};

export default FiltersSelects;
