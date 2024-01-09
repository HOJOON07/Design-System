import { useCallback, useState } from "react";
import { UseToggleReturn, ToggleProps } from "./types";

export const useToggle = ({
  isSelected = false,
}: ToggleProps): UseToggleReturn => {
  const [toggle, setToggle] = useState<boolean>(isSelected);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return {
    isSelected: toggle,
    setSelected: setToggle,
    toggle: handleToggle,
  };
};
