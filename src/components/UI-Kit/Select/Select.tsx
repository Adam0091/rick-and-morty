import { TextField } from "@mui/material";
import { SelectStyle } from "./Select.style";

type TProps = {
  options: string[];
  label: string;
  value: string | null;
  setValue: (value: string | null) => void;
};

export const Select = ({ options, label, value, setValue }: TProps) => {
  const handleOnChangeSelect = (newValue: unknown) => {
    if (typeof newValue === "string") setValue(newValue);
    if (newValue === null) setValue(newValue);
  };

  return (
    <SelectStyle
      disablePortal
      value={value}
      onChange={(_, newValue) => handleOnChangeSelect(newValue)}
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
