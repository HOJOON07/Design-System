import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@hojoon/react-components-input";
import * as React from "react";
import "@hojoon/react-components-input/style.css";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input variant="filled" placeholder="dd"></Input>,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd"></Input>
    </InputGroup>
  ),
};
