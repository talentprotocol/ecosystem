import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pills } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Pills",
  component: Pills,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Pills>;

const Template: ComponentStory<typeof Pills> = (args) => <Pills {...args} />;

export const Default = Template.bind({});
Default.args = {
  pillList: [
    {
      content: "First",
      isSelected: false,
    },
    {
      content: "Second",
      isSelected: true,
    },
    {
      content: "Third",
      isSelected: false,
      isDisabled: true,
    },
  ],
  onClick: (pill, index) => {
    console.log(`clicked ${pill} on index ${index}`);
  },
};
