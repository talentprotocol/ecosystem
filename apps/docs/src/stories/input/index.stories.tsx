import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Desgin System/Input",
  component: Input,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Container>
    <Input {...args} />
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
