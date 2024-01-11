import "@hojoon/react-components-button/style.css";
import "@hojoon/react-components-toast/style.css";
import { Button } from "@hojoon/react-components-button";
import { ToastProvider, useToast } from "@hojoon/react-components-toast";
import React from "react";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello World",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ButtonStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
