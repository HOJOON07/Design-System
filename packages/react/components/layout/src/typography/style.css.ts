import { recipe } from "@vanilla-extract/recipes";
import { classes } from "@hojoon/themes";

export const textStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.text,
    },
    defaultVariants: {
      fontSize: "xl",
    },
  },
});

export const headingStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.heading,
    },
  },
  defaultVariants: {
    fontSize: "4xl",
  },
});
