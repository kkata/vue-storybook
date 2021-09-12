import Page from "./Page";

export default {
  title: "Page",
  component: Page,
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
