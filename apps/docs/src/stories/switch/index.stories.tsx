import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => 
  // @ts-ignore
  <Switch {...args} />;

export const Primary = Template.bind({});
