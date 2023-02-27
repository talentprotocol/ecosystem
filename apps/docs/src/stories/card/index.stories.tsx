import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "@talentprotocol/design-system";

export default {
  title: "Desgin System/Card",
  component: Card,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <div>Something here</div>
  </Card>
);

export const Default = Template.bind({});
