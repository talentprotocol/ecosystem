import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Button,
  ButtonDropdown,
  TalentThemeProvider,
} from "@talentprotocol/design-system";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export default {
  title: "Design System/ButtonDropdown",
  component: ButtonDropdown,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof ButtonDropdown>;

const Template: ComponentStory<typeof ButtonDropdown> = (args) => (
  <TalentThemeProvider>
    <Container>
      <ButtonDropdown {...args}>
        <Button
          hierarchy="secondary"
          size="small"
          onClick={() => {}}
          iconColor="primary01"
          leftIcon="navigation"
        />
      </ButtonDropdown>
    </Container>
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  opensOnRight: false,
  options: [
    {
      value: "First option",
      iconName: "celo",
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
    },
  ],
};
