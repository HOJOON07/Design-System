import { ComponentPropsWithoutRef } from "react";

export type UseInputProps = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  // 밑에 value onChange를 string으로 타입을 설계해주면 ref에 대해 대응이 불가능하다.
  // value?: string;
  // onChange?: string;

  // 확장성을 고려하여 설계
} & Omit<ComponentPropsWithoutRef<"input">, "disabled" | "readOnly">;

export type UseInputResult = {
  inputProps: ComponentPropsWithoutRef<"input"> & {
    "data-disabled": boolean;
    "data-invalid": boolean;
    "aria-invalid": boolean;
    "aria-required": boolean;
  };
  valueCount: number;
};
