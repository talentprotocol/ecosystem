import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "@talentprotocol/design-system";

export default {
  title: "Design System/Icon",
  component: Icon,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "talent-protocol",
  color: "primary",
};
