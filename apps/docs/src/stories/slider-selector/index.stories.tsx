import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SliderSelector } from "@talentprotocol/design-system";

export default {
  title: "Design System/SliderSelector",
  component: SliderSelector,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof SliderSelector>;

const Template: ComponentStory<typeof SliderSelector> = (args) => {
  return <SliderSelector {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: 4,
  selectedIndex: 0,
};
