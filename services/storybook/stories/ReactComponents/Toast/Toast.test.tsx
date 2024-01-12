import React from "react";

// vi는 페이크를 통해서 타이머, 시간 변경
// waitfor는 잠깐 딜레이를 줘서 이벤트가 충분히 동작후에 테스트가 실행돨 수 있도록

import { composeStories } from "@storybook/react";
import * as stories from "./Toast.stories";
import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  userEvent,
  waitFor,
} from "../../../.storybook/test/test-utils";

const { ToastStory } = composeStories(stories);

describe("Toast 컴포넌트 테스트", () => {
  it("토스트 클릭시 토스트가 잘 뜨는지 확인하겠습니다.", async () => {
    // Given
    render(<ToastStory></ToastStory>);

    // WHEN
    const button = screen.getByRole("button");
    userEvent.click(button);

    // THEN (버튼을 클릭했고 토스트 스토리에 Hello World가 클릭 이벤트 후에 잘 찍히는지 확인)
    await waitFor(() => {
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });
  });

  it("토스트 클릭 후 3초 뒤 토스트가 사라지는지 확인", async () => {
    // GIVEN
    vi.useFakeTimers();
    const { container } = render(<ToastStory />);
    // WHEN
    const button = screen.getByRole("button");
    userEvent.click(button);

    const toastContainer = container.querySelector("#toast-container");
    // THEN 2999,3000이면 토스트 테스트 실패, 3001이면 테스트 성공 케이스
    await vi.advanceTimersByTimeAsync(3001);
    expect(toastContainer?.hasChildNodes()).toBeFalsy();
  });
});
