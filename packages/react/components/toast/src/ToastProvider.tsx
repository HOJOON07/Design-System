import { PropsWithChildren, useContext, useRef, useState } from "react";
import { ToastContainer } from "./ToastContainer";
import { Toast } from "./Toast";
import { ToastConfigProps, ToastContext } from "./ToastContext";
import { ToastPayload } from "./types";

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toastPayload, setToastPayload] = useState<ToastPayload | undefined>(
    undefined,
  );

  const timeOutRef = useRef<number | undefined>(undefined);
  const handleToast = (toastProps: ToastConfigProps) => {
    // 비동기 이벤트루프에서 문제가 있는 코드
    // setToastPayload(toastProps.payload);
    // setTimeout(() => {
    //   setToastPayload(undefined);
    // }, 3000);

    const { timeout = 3000 } = toastProps;

    if (toastPayload) {
      setToastPayload(undefined);
      clearTimeout(timeOutRef.current);
      timeOutRef.current = undefined;
    }

    setToastPayload(toastProps.payload);

    timeOutRef.current = setTimeout(() => {
      setToastPayload(undefined);
      timeOutRef.current = undefined;
    }, timeout);
  };
  return (
    <ToastContext.Provider value={{ toast: handleToast }}>
      {children}
      <ToastContainer>
        {toastPayload && <Toast {...toastPayload}></Toast>}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be use within a ToastProvider");
  }

  return context;
};
