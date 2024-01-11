import { PropsWithChildren } from "react";
import { toastContainerStyle } from "./style.css";

export const ToastContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div tabIndex={-1} className={toastContainerStyle}>
      {children}
    </div>
  );
};
