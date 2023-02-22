import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  // @ts-ignore
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is some text",
  specs: { variant: "h1", type: "bold" },
};
