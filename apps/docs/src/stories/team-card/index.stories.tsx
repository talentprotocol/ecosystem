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
  tags: ["tag1", "tag2", "tag3"],
  membersImages: [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
  ],
  to: "/",
  totalMembers: 330,
};
