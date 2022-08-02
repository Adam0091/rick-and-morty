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
import {
  FilterOptionsType,
  SelectOptionsType,
  SelectValuesType,
} from "@/types";

type TProps = {
  values: SelectValuesType;
  setValues: React.Dispatch<React.SetStateAction<SelectValuesType>>;
  selectOption: SelectOptionsType;
  filterOptions: FilterOptionsType;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptionsType>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FiltersSelects = ({
  values,
  setValues,
  selectOption,
  filterOptions,
  setFilterOptions,
  isActive,
  setIsActive,
}: TProps) => {
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

  const handleSelect = (value: string | null, type: string) => {
    if (window.innerWidth > 767) {
      setValues((values: SelectValuesType) => ({
        ...values,
        [type]: value,
      }));
      setFilterOptions((filterOptions: FilterOptionsType) => ({
        ...filterOptions,
        [type]: value,
      }));
    } else {
      setValues((values: SelectValuesType) => ({
        ...values,
        [type]: value,
      }));
    }
  };

  const handleApplyButton = () => {
    setIsActive((isActive: boolean) => !isActive);
    setFilterOptions((filterOptions: FilterOptionsType) => ({
      ...filterOptions,
      ...values,
    }));
  };

  const onCloseSelects = () => {
    setIsActive((isActive: boolean) => !isActive);
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
          setValue={(value: string | null) => handleSelect(value, select.type)}
        />
      ))}

      <WrapperApplyButton>
        <ApplyButton onClick={handleApplyButton}>Apply</ApplyButton>
      </WrapperApplyButton>
    </WrapperSelects>
  );
};
