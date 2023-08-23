import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default {
  title: "Design System/Tabs",
  component: Tabs,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Container>
    <Tabs {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  tabList: ["First Tab", "Second Tab", "Third Tab"],
  selectedIndex: 0,
  noBottomBar: false,
  disabledList: [false, false, true],
};
