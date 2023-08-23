import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown, TalentThemeProvider } from "@talentprotocol/design-system";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export default {
  title: "Design System/Dropdown",
  component: Dropdown,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <TalentThemeProvider>
    <Container>
      <Dropdown {...args} />
    </Container>
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      value: "First option",
      iconName: "celo",
      isDisabled: true,
    },
    {
      value: "Second option",
      iconName: "polygon",
    },
    {
      value: "Third option",
      iconName: "rating",
    },
    {
      value: "Fourth option",
      iconName: "rocket",
    },
    {
      value: "Fifth option",
      iconName: "chat",
      isDisabled: true,
    },
  ],
};
