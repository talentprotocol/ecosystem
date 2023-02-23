import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Switch",
  component: Switch,
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  isDarkTheme: false,
  state: "disabled",
};
