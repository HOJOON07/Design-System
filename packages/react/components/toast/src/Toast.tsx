import { toastStyle } from "./style.css";
import { ToastPayload } from "./types";

export const Toast = (props: ToastPayload) => {
  const { message } = props;
  return <div className={toastStyle}>{message}</div>;
};
