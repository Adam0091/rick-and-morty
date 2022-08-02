import { TextField } from "@mui/material";
import { SelectStyle } from "./Select.style";
import { useState } from "react";

export const Select = ({ options, label, value, setValue }: any) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <SelectStyle
      disablePortal
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
