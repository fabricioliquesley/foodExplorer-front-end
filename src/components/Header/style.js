import { styled } from "styled-components";

export const Container = styled.header`
    /* position: sticky;
    top: 0;
    z-index: 3; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK.DARK700};
    padding: 2rem;

    > button {
        display: grid;
        place-content: center;
        background: transparent;
        border: none;
    }

    > button > svg, a > svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT100};
    }

    > div {
        img {
            width: 1.6rem;
        }

        h1 {
            font-size: 1.6rem;
        }
    }

    > .orders {
        position: relative;

        > .ordersNotification {
            position: absolute;
            top: -3px;
            right: -3px;
            display: grid;
            place-content: center;
            width: 1.5rem;
            height: 1.5rem;
            background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO100};
            color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT100};
            font-size: 1rem;
            border-radius: 50%;
        }
    }
`;