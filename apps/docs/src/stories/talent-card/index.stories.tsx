import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, TalentCard } from "@talentprotocol/design-system";
import styled from "styled-components";

const RandomChildren = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/TalentCard",
  component: TalentCard,
  parameters: {
    viewMode: "docs",
    previewTalentCard: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof TalentCard>;

const Template: ComponentStory<typeof TalentCard> = (args) => (
  <TalentCard {...args}>
    <RandomChildren>
      <Button hierarchy="primary" size="small" text="Call to action" />
    </RandomChildren>
  </TalentCard>
);

export const Default = Template.bind({});
Default.args = {
  bannerImage: "",
  profileImage: "",
  name: "The team",
  occupation: "Super hero Software Engineer",
  isVerified: true,
  ticker: "GDX",
  to: "/",
};
