import { Layouts as layout } from "./layout";
import { Shapes as shape } from "./shape";
export const Variants: import("rebass").SxStyleProp = {
  layout: {
    ...layout,
  },
  shape: {
    ...shape,
  },
  listItem: {
    pl: [2, 3],
    pr: [2, 3],
    pt: 3,
    pb: 3,
    borderRadius: "default",
    bg: "background",
  },
  pointer: {
    cursor: "pointer",
  },
  borderBottom: {
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "divider",
  },
  borderTop: {
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "divider",
  },
  nav: {
    color: "text",
    fontWeight: "bolder",
    cursor: "pointer",
    textDecoration: "none",
    ":hover": {
      color: "primary",
    },
  },
};
