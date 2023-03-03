import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextArea } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/TextArea",
  component: TextArea,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <Container>
    <TextArea {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "",
  label: "",
  shortDescription: "",
  caption: "",
  isDisabled: false,
  hasError: false,
};
