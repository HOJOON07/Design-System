import "@hojoon/react-components-layout/style.css";
import { Flex as _Flex } from "@hojoon/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Flex = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "100px",
    },
  },

  render: (args) => {
    return (
      <_Flex {...args}>
        <div>테스트</div>
        <div>입니다.</div>
      </_Flex>
    );
  },
};
