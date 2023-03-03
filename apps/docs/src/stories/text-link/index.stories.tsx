import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextLink } from "@talentprotocol/design-system";

const Container = styled.div``;

export default {
  title: "Design System/TextLink",
  component: TextLink,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
  <Container>
    <TextLink {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  text: "This is a link",
  size: "medium",
  color: "primary",
};
