import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Button",
  component: Button,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  hierarchy: "primary",
  size: "large",
  text: "Button Content",
};
