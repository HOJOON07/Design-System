import "@hojoon/react-components-button/style.css";
import { Button as _Button } from "@hojoon/react-components-button";
import { vars } from "@hojoon/themes";
import { Text } from "@hojoon/react-components-layout";
import { useButton, useToggleButton } from "@hojoon/react-hooks-button";
import React from "react";

export default {
  title: "React Components/Button",
  component: _Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    children: "Button",
    size: "lg",
    variant: "outline",
    isDisabled: false,
    leftIcon: "왼쪽",
    rightIcon: "오른쪽",
    isLoading: false,
  },
  render: (args) => <_Button {...args}></_Button>,
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("!!!!!");
      },
    });
    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        텍스트 버튼입니다
      </Text>
    );
  },
};

export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      {
        elementType: "button",
      },
      false,
    );
    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "셀렉" : "노셀렉 "}
      </_Button>
    );
  },
};
