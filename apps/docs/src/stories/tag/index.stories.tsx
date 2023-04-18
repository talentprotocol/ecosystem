import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag, TalentThemeProvider } from "@talentprotocol/design-system";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/Tag",
  component: Tag,
  parameters: {
    viewMode: "docs",
    previewTag: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <TalentThemeProvider forceWhiteTheme>
    <Container>
      <Tag {...args} />
    </Container>
  </TalentThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "warning",
  textColor: "warningText",
  label: "Tag Label",
  leftIcon: "clock",
  rightIcon: "bulb",
};
