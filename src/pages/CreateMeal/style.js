import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    > main {
        overflow: ${({ $statusMenu }) => $statusMenu == "open" ? "hidden" : "auto"};
    }
`;

export const Content = styled.div`
    display: grid;
    gap: 2.4rem;
    padding: 3.2rem;

    > a {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
        line-height: 140%;
    }

    h2 {
        font-size: 2.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT100};
    }
`;