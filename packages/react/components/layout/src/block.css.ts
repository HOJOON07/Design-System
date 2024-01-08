import { style } from "@vanilla-extract/css";
import { vars } from "@hojoon/themes";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.blue[500],
});
