import { UseInputProps } from "@hojoon/react-hooks-input";
import { vars } from "@hojoon/themes";
import * as React from "react";

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};

export type InputGroupProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type InputLeftAddonProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode;
};
