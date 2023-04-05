import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  buildColor,
  Modal,
  TalentThemeProvider,
  Typography,
} from "@talentprotocol/design-system";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 3000px;
`;

const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid ${buildColor("surfaceHover01")};
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
  <TalentThemeProvider forceDarktheme>
    <Container>
      <Modal
        {...args}
        footer={
          <Footer>
            <Typography
              specs={{ variant: "p2", type: "regular" }}
              color="primary01"
            >
              THIS IS A FOOTER
            </Typography>
          </Footer>
        }
      >
        <Typography
          specs={{ variant: "p2", type: "regular" }}
          color="primary01"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
      </Modal>
    </Container>
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Something",
  isOpen: true
};
