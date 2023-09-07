import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TagsInput } from "@talentprotocol/design-system";

export default {
  title: "Design System/TagsInput",
  component: TagsInput,
  parameters: {
    viewMode: "docs",
    previewTagsInput: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof TagsInput>;

const Template: ComponentStory<typeof TagsInput> = (args) => (
  <TagsInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Tags",
  description: "Min 3, up to 10",
  placeholder: "Search skills, interests, roles",
  suggestions: ["test"],
  defaultTags: ["asdasd"],
};
