import { useToggle } from "@hojoon/react-hooks-toggle";
import { OverloadedToggleButtonFunction } from "./types";
import { useButton } from "./useButton";
import * as React from "react";

export const useToggleButton: OverloadedToggleButtonFunction = (
  props: any,
  isSelected?: boolean,
): any => {
  const { isSelected: _isSelected, toggle } = useToggle({
    isSelected,
  });

  const handleClick = (e: React.MouseEvent) => {
    toggle();
    props?.onClick?.(e);
  };
  const { buttonProps } = useButton({
    ...props,
    onClick: handleClick,
  });

  return {
    buttonProps,
    isSelected: _isSelected,
  };
};
