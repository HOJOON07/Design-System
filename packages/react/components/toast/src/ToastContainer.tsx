import { PropsWithChildren } from "react";
import { toastContainerStyle } from "./style.css";

export const ToastContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div id="toast-container" tabIndex={-1} className={toastContainerStyle}>
      {children}
    </div>
  );
};
