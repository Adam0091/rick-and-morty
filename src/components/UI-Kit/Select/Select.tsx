import { TextField } from "@mui/material";
import { SelectStyle } from "./Select.style";

type TProps = {
  options: string[];
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export const Select = ({ options, label, value, setValue }: TProps) => {
  const handleOnChangeSelect = (newValue: unknown) => {
    if (typeof newValue === "string") setValue(newValue);
  };

  return (
    <SelectStyle
      disablePortal
      inputValue={value}
      onInputChange={(_, newValue) => handleOnChangeSelect(newValue)}
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
