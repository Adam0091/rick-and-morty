import { Select } from "@components/UI-Kit/Select/Select";

import {
  ApplyButton,
  SelectHeaderCross,
  SelectsHeaderTitle,
  WrapperApplyButton,
  WrapperSelects,
  WrapperSelectsHeader,
} from "./FiltersSelects.style";

import crossIcon from "@assets/images/crossIcon.svg";
import { SelectType } from "@/types";

type TProps = {
  selects: SelectType[];
  isActive: boolean;
  handleSelect: (value: string, type: string) => void;
  onCloseSelects: () => void;
  handleApplyButton: () => void;
};

export const FiltersSelects = ({
  selects,
  isActive,
  handleSelect,
  onCloseSelects,
  handleApplyButton,
}: TProps) => {
  return (
    <WrapperSelects IsActive={isActive}>
      <WrapperSelectsHeader>
        <SelectsHeaderTitle>Filters</SelectsHeaderTitle>
        <SelectHeaderCross onClick={onCloseSelects}>
          <img src={crossIcon} alt="cross" />
        </SelectHeaderCross>
      </WrapperSelectsHeader>

      {selects.map((select: SelectType) => (
        <Select
          key={select.label}
          options={select.option}
          label={select.label}
          value={select.value}
          setValue={(value: string) => handleSelect(value, select.type)}
        />
      ))}

      <WrapperApplyButton>
        <ApplyButton onClick={handleApplyButton}>Apply</ApplyButton>
      </WrapperApplyButton>
    </WrapperSelects>
  );
};
