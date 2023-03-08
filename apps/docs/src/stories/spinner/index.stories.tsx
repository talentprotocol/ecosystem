import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "@talentprotocol/design-system";

export default {
  title: "Design System/Spinner",
  component: Spinner,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  size: 16,
};
