import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, TalentThemeProvider } from "@talentprotocol/design-system";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <TalentThemeProvider>
    <Checkbox {...args} />
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  isChecked: true,
  isDisabled: false,
  label: "label"
};
