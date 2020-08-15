import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FieldProps } from "formik";

const predefined = [
  {
    value: "User1",
    label: "User1",
  },
  {
    value: "User2",
    label: "User2",
  },
  {
    value: "User3",
    label: "User3",
  },
];
export const DrawerField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type,
  select,
}) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      type={type}
      select={select}
      {...field}
    >
      {predefined.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
};
