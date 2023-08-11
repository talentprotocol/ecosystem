import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert, TalentThemeProvider } from "@talentprotocol/design-system";

export default {
  title: "Design System/Alert",
  component: Alert,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <TalentThemeProvider>
    <Alert {...args} />
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: "Your success message",
  body: "Describe the event and give further instructions if needed, including links to to other pages",
  followUpLink: "https://talentprotocol.com",
};
