import styled from "styled-components";
import { buildColor } from "../colors";

export const Container = styled.div`
  padding: 24px;
  border-radius: 24px;
  border: 4px solid ${buildColor("surfaceHover01")};
  display: flex;
  flex-direction: column;
`;
