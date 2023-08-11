import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotificationIcon, buildColor } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${buildColor("primary04")};
  border-radius: 8px;
`;

export default {
  title: "Design System/NotificationIcon",
  component: NotificationIcon,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof NotificationIcon>;

const Template: ComponentStory<typeof NotificationIcon> = () => (
  <Container>
    <NotificationIcon />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  size: 6,
};
