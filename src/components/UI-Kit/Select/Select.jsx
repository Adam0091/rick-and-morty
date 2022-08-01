import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { SelectStyle } from "./Select.style";
import { useState } from "react";

const Select = ({ options, label, value, setValue }) => {
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

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Select;
