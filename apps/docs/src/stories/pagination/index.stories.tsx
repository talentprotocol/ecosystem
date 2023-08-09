import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "@talentprotocol/design-system";

export default {
  title: "Design System/Pagination",
  component: Pagination,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  selectedPage: 1,
};
