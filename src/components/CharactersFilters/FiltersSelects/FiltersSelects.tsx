import { Select } from "./../../UI-Kit/Select/Select";

import {
  ApplyButton,
  SelectHeaderCross,
  SelectsHeaderTitle,
  WrapperApplyButton,
  WrapperSelects,
  WrapperSelectsHeader,
} from "./FiltersSelects.style";

import crossIcon from "@/assets/images/crossIcon.svg";

export const FiltersSelects = ({
  values,
  setValues,
  selectOption,
  filterOptions,
  setFilterOptions,
  isActive,
  setIsActive,
}: any) => {
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

  const handleSelect = (value: any, type: string) => {
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
    <WrapperSelects IsActive={isActive}>
      <WrapperSelectsHeader>
        <SelectsHeaderTitle>Filters</SelectsHeaderTitle>
        <SelectHeaderCross onClick={onCloseSelects}>
          <img src={crossIcon} alt="cross" />
        </SelectHeaderCross>
      </WrapperSelectsHeader>

      {selects.map((select) => (
        <Select
          key={select.label}
          options={select.option}
          label={select.label}
          value={select.value}
          setValue={(value: any) => handleSelect(value, select.type)}
        />
      ))}

      <WrapperApplyButton>
        <ApplyButton onClick={handleApplyButton}>Apply</ApplyButton>
      </WrapperApplyButton>
    </WrapperSelects>
  );
};
