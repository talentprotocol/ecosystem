import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const Template: ComponentStory<typeof Button> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  hierarchy: "primary",
  size: "large",
  text: "Button Content",
};
