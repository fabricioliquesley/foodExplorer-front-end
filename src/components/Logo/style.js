import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: fit-content;

    > h1 {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    }

    > span {
        color: ${({theme}) => theme.COLORS.TINTS.CAKE200};
    }
`;