import { useState } from "react";
import { UseInputProps, UseInputResult } from "./types";

export const useInput = (props: UseInputProps): UseInputResult => {
  const {
    isDisabled = false,
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(e);
    } else {
      setUncontrolledValue(e.target.value);
    }
  };

  const currentValue = isControlled ? value : uncontrolledValue;

  return {
    inputProps: {
      ...rest,
      disabled: isDisabled,
      readOnly: isReadOnly,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
    valueCount: currentValue.toString().length,
  };
};
