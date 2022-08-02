import { TextField } from "@mui/material";
import { SelectStyle } from "./Select.style";

export const Select = ({ options, label, value, setValue }: any) => {
  const handleOnChangeSelect = (newValue: any) => {
    setValue(newValue);
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
}
