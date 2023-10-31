import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  MembersList,
  TalentThemeProvider,
} from "@talentprotocol/design-system";

export default {
  title: "Design System/MembersList",
  component: MembersList,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof MembersList>;

const Template: ComponentStory<typeof MembersList> = (args) => (
  <TalentThemeProvider>
    <MembersList {...args} />
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  membersImages: [
    "https://i.pravatar.cc/300?img=1",
    "https://i.pravatar.cc/301?img=1",
    "https://i.pravatar.cc/302?img=1",
    "https://i.pravatar.cc/303?img=1",
  ],
  totalMembers: 100,
  label: "new label"
};
