import { createContext } from "react";
import { ToastPayload } from "./types";

export type ToastConfigProps = {
  payload: ToastPayload;
  // 토스트가 닫히는 시간에 대한 확장설을 고려해서 타입 추가할 수 있음

  timeout?: number;
};

export type ToastContextType = {
  toast: (toastProps: ToastConfigProps) => void;
};

export const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});
