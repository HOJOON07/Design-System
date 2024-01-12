import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../../../.storybook/test/test-utils";
// 스토리북 임포트 부분
import { composeStories } from "@storybook/react";
import * as stories from "./Accordion.stories";

const { AccordionTestStory } = composeStories(stories);

// 테스트 시나리오
// 1. Acoordion 버튼 클릭 시 Accordion 펼쳐지는지 확인
// 2. 두번째 Accordion 버튼 클릭 시 두번째 AccordionPanel만 펼쳐지는지 확인
// 3. 활성화 되어있는 Acoordion 버튼 클릭 시 AccordionPanel 접히는지 확인
// 4. defaultActiveItems에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel 펼쳐지 있는지 확인

describe("아코디언 컴포넌트 기능 테스트", () => {
  it("1. Acoordion 버튼 클릭 시 Accordion 펼쳐지는지 확인", async () => {
    // Given
    const args = {
      items: [{ name: "목록1", content: "목록1 내용입니다." }],
      defaultActiveItems: [],
    };
    // when
    render(<AccordionTestStory {...args}></AccordionTestStory>);

    //then

    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });

  it("2. 두번째 Accordion 버튼 클릭 시 두번째 AccordionPanel만 펼쳐지는지 확인", async () => {
    // Given
    const args = {
      items: [
        { name: "목록1", content: "목록1 내용입니다." },
        { name: "목록2", content: "목록2 내용입니다." },
      ],
      defaultActiveItems: [],
    };
    // when
    render(<AccordionTestStory {...args}></AccordionTestStory>);

    //then
    // 0,1이 둘다 일단은 닫혀있는지 확인
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    // 두번재 버튼 클릭하면 두번째 판넬만 닫혀야한다.
    await screen.getByTestId("button-1").click();
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "true",
    );
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
  });

  it("3. 활성화 되어있는 Acoordion 버튼 클릭 시 AccordionPanel 접히는지 확인", async () => {
    // Given
    const args = {
      items: [{ name: "목록2", content: "목록2 내용입니다." }],
      defaultActiveItems: [],
    };
    // when 일단 클릭해서 디폴트를 열린 상태로
    render(<AccordionTestStory {...args}></AccordionTestStory>);
    await screen.getByTestId("button-0").click();

    //then 그래서 열렸고

    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
    // then 2 다시 눌렀더니 다시 닫힌다.
    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
  });
  it("4. defaultActiveItems에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel 펼쳐지 있는지 확인", async () => {
    // Given
    const args = {
      items: [{ name: "목록1", content: "목록1 내용입니다." }],
      defaultActiveItems: ["목록1"],
    };
    // when
    render(<AccordionTestStory {...args}></AccordionTestStory>);
    // activeitem에 목록1이 이미 들어가 있다. 그러면 활성화가 되어있어야 한다.
    //then

    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });
});
