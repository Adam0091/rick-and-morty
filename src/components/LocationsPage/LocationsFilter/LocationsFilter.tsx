import { useState } from "react";

import { FiltersInputSearch } from "@components/UI-Kit/FiltersInputSearch";
import { Shadow } from "@components/UI-Kit/Shadow";
import { FiltersButton } from "@components/UI-Kit/FiltersButton";
import { FiltersSelects } from "@components/UI-Kit/FiltersSelects";

import { FiltersWrapper } from "@components/CharactersPage/CharactersFilters/CharactersFilters.style";
import { LocationSelectValuesType, LocationsSelectOptionsType } from "@/types";
import { LocationFilterOptionsType } from "@/types";
import { LocationType } from "@/types/enum";

type TProps = {
  selectOption: LocationsSelectOptionsType;
  filterOptions: LocationFilterOptionsType;
  setFilterOptions: React.Dispatch<
    React.SetStateAction<LocationFilterOptionsType>
  >;
};

export const LocationsFilter = ({
  selectOption,
  filterOptions,
  setFilterOptions,
}: TProps) => {
  const [isActive, setIsActive] = useState(false);
  const [values, setValues] = useState<LocationSelectValuesType>({
    type: "",
    dimension: "",
  });

  const selects = [
    {
      label: "Type",
      option: selectOption.type,
      value: values.type,
      type: LocationType.TYPE,
    },
    {
      label: "Dimension",
      option: selectOption.dimension,
      value: values.dimension,
      type: LocationType.DIMENSION,
    },
  ];

  const handleSelect = (value: string, type: string) => {
    console.log(value, type);
    if (window.innerWidth > 767) {
      setValues((values: LocationSelectValuesType) => ({
        ...values,
        [type]: value,
      }));
      setFilterOptions((filterOptions: LocationFilterOptionsType) => ({
        ...filterOptions,
        [type]: value,
      }));
    } else {
      setValues((values: LocationSelectValuesType) => ({
        ...values,
        [type]: value,
      }));
    }
  };

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions((filterOptions: LocationFilterOptionsType) => ({
      ...filterOptions,
      name: e.target.value,
    }));
  };

  const handleApplyButton = () => {
    document.body.classList.toggle("block_scroll");
    setIsActive((isActive: boolean) => !isActive);
    setFilterOptions((filterOptions: LocationFilterOptionsType) => ({
      ...filterOptions,
      ...values,
    }));
  };

  const onCloseSelects = () => {
    document.body.classList.toggle("block_scroll");
    setIsActive((isActive: boolean) => !isActive);
    setValues({
      type: filterOptions.type,
      dimension: filterOptions.dimension,
    });
  };

  return (
    <>
      <Shadow isActive={isActive} setIsActive={setIsActive} />
      <FiltersWrapper>
        <FiltersInputSearch handleInputSearch={handleInputSearch} />
        <FiltersButton setIsActive={setIsActive} />
        <FiltersSelects
          selects={selects}
          isActive={isActive}
          handleSelect={handleSelect}
          handleApplyButton={handleApplyButton}
          onCloseSelects={onCloseSelects}
        />
      </FiltersWrapper>
    </>
  );
};
