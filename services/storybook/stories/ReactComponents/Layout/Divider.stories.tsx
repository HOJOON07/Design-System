import "@hojoon/react-components-layout/style.css";
import { Divider as _Divider } from "@hojoon/react-components-layout";

import { classes, vars } from "@hojoon/themes";

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  // decorators: [
  //   (Story) => (
  //     <Box padding={3} style={{ width: "300px", height: "300px" }}>
  //       <Story />
  //     </Box>
  //   ),
  // ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientaion: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
  },
};

export const Divider = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientaion: "horizontal",
  },
};
