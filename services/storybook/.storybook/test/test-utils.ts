import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
// tobeindocument 같은거 테스트 코드마다 호출해줘야 하는데 util파일 안에 호출 해놓으면 매번 호출안해도됨.
import "@testing-library/jest-dom";

// Storybook's preview file location
import * as globalStorybookConfig from "../preview";

import { setProjectAnnotations } from "@storybook/react";
// @ts-ignore
setProjectAnnotations(globalStorybookConfig);

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
