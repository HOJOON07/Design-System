import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const main = style([
  f.flexCenterBox,
  f.directionColumn,
  f.hScreen,
  f.wScreen,
  f.color.scale.gray[900],
  {
    height: "100vh",
  },
]);
