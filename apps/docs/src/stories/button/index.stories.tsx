import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@talentprotocol/design-system";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

export const ButtonComponent = ButtonTemplate.bind({});
ButtonComponent.args = {
  hierarchy: "primary",
  size: "large",
  text: "Button Content",
  iconColor: "bg01",
  isLoading: false,
};
