import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "twitter",
        value: "#00aced",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      kindleFire2: {
        name: "Kindle Fire 2",
        styles: {
          width: "600px",
          height: "963px",
        },
      },
      kindleFireHD: {
        name: "Kindle Fire HD",
        styles: {
          width: "533px",
          height: "801px",
        },
      },
    },
  },
};
