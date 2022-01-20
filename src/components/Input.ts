import styled from "styled-components";
import { colors } from "./Theme";

export const Label = styled.label`
    font-weight: bold;
    color: ${colors.text};
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid ${colors.primary};
  border-radius: 3px;
`;