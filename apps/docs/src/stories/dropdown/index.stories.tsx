import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "@talentprotocol/design-system";
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
  <Container>
    <Dropdown {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  options: ["First option", "Second option", "Third option"],
};
