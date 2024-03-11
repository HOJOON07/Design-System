import { style } from "@vanilla-extract/css";
import { f } from "../shared/styles/functions";

export const main = style([
  f.flexCenterBox,
  f.hScreen,
  f.wScreen,
  {
    height: "100vh",
  },
]);

export const typo = style([
  f.color.scale.gray[600],
  {
    fontSize: "24px",
  },
]);

// export const typo = style({
//   color: "var(--gray-900)",
// });

// f.color.scale.gray[600],
// {
//   fontSize: "24px",
// },
