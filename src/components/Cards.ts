import styled from "styled-components";
import { colors } from "./Theme";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const CardMedia = styled.img`
  border-radius: 50%;
  border: 8px groove ${colors.primary};
  height: 126px;
  width: 128px;
`;

export const CardContent = styled.div`
  border: 2px solid #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  background: #f5f5f5;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  color: ${colors.primary};
`;

export const CardText = styled.p`
  color: "#808080";
`;
