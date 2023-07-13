import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/Avatar",
  component: Avatar,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Container>
    <Avatar {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  size: "lg",
  url: undefined,
  userId: 1,
  name: "",
  ticker: "",
  occupation: "",
  isVerified: false,
  ellipsisAt: 0,
  isDisabled: false,
  profileURL: "",
  square: false,
};
