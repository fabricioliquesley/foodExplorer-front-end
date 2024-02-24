import { styled } from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    background: ${({theme}) => theme.COLORS.TINTS.TOMATO100};
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 0.5rem;
`;