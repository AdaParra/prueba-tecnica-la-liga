import styled from "styled-components";
import { colors } from "./Theme";

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: auto;
    grid-gap: 1rem;
`;

export const Card = styled.div`
    border: 2px solid #F5F5F5;
    border-radius: 4px;
    padding: .5rem;
    text-align: center;
    background: #F5F5F5;
`;

export const CardBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`;

export const CardTitle = styled.h3`
    font-weight: bold;
    color: ${colors.primary};
`;

export const CardText = styled.p`
    color: '#808080';
`;

