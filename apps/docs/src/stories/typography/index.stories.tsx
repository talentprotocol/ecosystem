import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Typography",
  component: Typography,
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is some text",
  specs: { variant: "h1", type: "bold" },
};
