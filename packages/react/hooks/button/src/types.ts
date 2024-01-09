import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
};

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
  (
    props: BaseButtonProps<"button">,
    isSelected?: false,
  ): UseToggleButtonReturn<HTMLButtonElement>;
  (
    props: BaseButtonProps<"a">,
    isSelected?: false,
  ): UseToggleButtonReturn<HTMLAnchorElement>;
  (
    props: BaseButtonProps<"div">,
    isSelected?: false,
  ): UseToggleButtonReturn<HTMLDivElement>;
  (
    props: BaseButtonProps<"input">,
    isSelected?: false,
  ): UseToggleButtonReturn<HTMLInputElement>;
  (
    props: BaseButtonProps<"span">,
    isSelected?: false,
  ): UseToggleButtonReturn<HTMLSpanElement>;
};
