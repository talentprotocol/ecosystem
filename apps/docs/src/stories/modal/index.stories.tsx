import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "@talentprotocol/design-system";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export default {
  title: "Design System/Modal",
  component: Modal,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Container>
    <Modal {...args}>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </Modal>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  title: "",
  isOpen: false,
};
