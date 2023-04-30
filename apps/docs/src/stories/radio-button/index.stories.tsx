import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  RadioButton,
  TalentThemeProvider,
} from "@talentprotocol/design-system";

export default {
  title: "Design System/RadioButton",
  component: RadioButton,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <TalentThemeProvider>
    <RadioButton {...args} />
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  isDisabled: false,
};
