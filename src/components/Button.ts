import styled from "styled-components";
import { colors } from "./Theme";

export const Button = styled.button`
  font-size: 1em;
  justify-self: center;
  margin: 1em;
  padding: 0.5rem;
  border: 2px solid ${colors.primary};
  background: ${colors.primary};
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    color: white;
  }
`;
