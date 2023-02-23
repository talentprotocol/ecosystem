import { useContext } from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  TalentThemeProvider,
  buildColor,
  TalentThemeUpdateContext,
} from "@talentprotocol/design-system";
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

const ToggleThemeButton = styled.button`
  width: 200px;
  height: 32px;
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const ColorStoryParentComponent = () => (
  <TalentThemeProvider>
    <ColorList />
  </TalentThemeProvider>
);

const ColorList = () => {
  const toggleTheme = useContext(TalentThemeUpdateContext);
  return (
    <>
      <ToggleThemeButton onClick={toggleTheme}>Toggle Theme</ToggleThemeButton>
      <Container>
        {Object.keys(lightPalette).map((color) => {
          const squareColor = buildColor(color as PaletteTokens);
          return (
            <ColorSquareContainer>
              <ColorSquare color={squareColor} key={squareColor} />
              <Label>{color}</Label>
            </ColorSquareContainer>
          );
        })}
      </Container>
    </>
  );
};

export default {
  title: "Desgin System/Colors",
  component: ColorStoryParentComponent,
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof ColorStoryParentComponent>;

const Template: ComponentStory<typeof ColorStoryParentComponent> = (args) => (
  // @ts-ignore
  <ColorStoryParentComponent {...args} />
);

export const Default = Template.bind({});
Default.bind({
  hierarchy: "small",
});
