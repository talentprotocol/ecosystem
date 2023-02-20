import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { buildColor } from "@talentprotocol/design-system";
import { lightPalette } from "@talentprotocol/design-system/colors/palette/light-theme";
import { PaletteTokens } from "@talentprotocol/design-system/colors/palette/types";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ColorSquareContainer = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorSquare = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color};
`;

const Label = styled.label`
  padding-top: 8px;
  font-family: sans-serif;
`;

const ColorList = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <Container>
    {Object.keys(lightPalette).map((color) => (
      <ColorSquareContainer key={`${isDarkTheme}-${color}`}>
        <ColorSquare color={buildColor(isDarkTheme, color as PaletteTokens)} />
        <Label>{color}</Label>
      </ColorSquareContainer>
    ))}
  </Container>
);

export default {
  title: "Desgin System/Colors",
  component: ColorList,
} as ComponentMeta<typeof ColorList>;

const Template: ComponentStory<typeof ColorList> = (args) => (
  // @ts-ignore
  <ColorList {...args} />
);

export const Default = Template.bind({});
Default.args = { isDarkTheme: false };
