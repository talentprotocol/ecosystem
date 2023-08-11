import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TeamCard } from "@talentprotocol/design-system";

export default {
  title: "Design System/TeamCard",
  component: TeamCard,
  parameters: {
    viewMode: "docs",
    previewTeamCard: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof TeamCard>;

const Template: ComponentStory<typeof TeamCard> = (args) => (
  <TeamCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bannerImage: "",
  profileImage: "",
  name: "The team",
  description:
    "This is a random description,a random description,a random description,a random description,a random description,a random description",
  tags: [
    {
      backgroundColor: "cyan",
      label: "tag1",
      size: "small",
      textColor: "danger",
      borderColor: "primaryText",
    },
    {
      backgroundColor: "cyan",
      label: "tag2",
      size: "small",
      textColor: "danger",
    },
  ],
  membersImages: [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
  ],
  to: "/",
  totalMembers: 330,
};
