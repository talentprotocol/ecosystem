import styled from "styled-components";
import { buildColor } from "../colors";
import { StyledInputAreaProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  padding: 8px 10px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const InputArea = styled.div<StyledInputAreaProps>`
  flex-grow: 1;
  outline: none;

  :empty::before {
    content: "${({ placeholder }) => placeholder}";
    color: ${buildColor("primary04")};
  }
`;

export const SuggestionsContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: -8px;
`;

export const SuggestionsList = styled.div`
  position: absolute;
  width: 100%;
  max-height: 336px;
  padding: 8px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background: ${buildColor("bg01")};
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  z-index: 1;
`;

export const SuggestionOption = styled.div`
  border-radius: 2px;
  padding: 4px 8px;
  cursor: pointer;

  :hover {
    background: ${buildColor("surfaceHover02")};
  }
`;
