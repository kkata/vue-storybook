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

export const decorators = [
  (story, context) => ({
    props: {
      padding: {
        type: String,
        default: context.globals.padding,
      },
    },
    template: `
      <div :style="{padding: padding}">
        <story />
      </div>
    `,
  }),
];

export const globalTypes = {
  padding: {
    name: "Padding",
    description: "ストーリー描画時のpaddingを設定します",
    defaultValue: "0px",
    toolbar: {
      icon: "circlehollow",
      items: ["0px", "30px", "100px"],
    },
  },
};
