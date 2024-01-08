import "@hojoon/react-components-layout/style.css";
import { Box as _Box } from "@hojoon/react-components-layout";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const BlockStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
