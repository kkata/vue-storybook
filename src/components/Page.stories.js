import Page from "./Page";

export default {
  title: "Page",
  component: Page,
  parameters: {
    // backgrounds: {
    //   default: "twitter",
    // },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Page },
  template: `<Page />`,
});

export const ForTablet = Template.bind({});
ForTablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const ForSmartPhone = Template.bind({});
ForSmartPhone.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const ForTwitter = Template.bind({});
ForTwitter.parameters = {
  backgrounds: {
    default: "twitter",
  },
};

export const ForFacebook = Template.bind({});
ForFacebook.parameters = {
  backgrounds: {
    default: "facebook",
  },
};
