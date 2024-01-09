import "@hojoon/react-components-layout/style.css";
import { Text as _Text } from "@hojoon/react-components-layout";
import { classes, vars } from "@hojoon/themes";

export default {
  title: "React Components/Typography/Text",
  component: _Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Text = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "Hello World",
  },
};
