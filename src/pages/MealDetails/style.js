import { styled } from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoint";

export const Container = styled.div`
position: relative;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    > main {
        overflow: ${({ $statusMenu }) => $statusMenu == "open" ? "hidden" : "auto"};
        padding: 3.36rem 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 34rem;
    margin: 0 auto;

    & * {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT300};
    }

    @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
        flex-direction: row;
        max-width: 100%;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > a {
        display: flex;
        align-items: center;
        align-self: flex-start;
        font-size: 2rem;
        line-height: 140%;
    }

    > img {
        width: 100%;
        max-width: 26rem;
        margin: 1.6rem 0;

        @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
            max-width: 39rem;
        }
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > .mealDetails {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        text-align: center;

        h3 {
            font-size: 2.7rem;
            line-height: 140%;
        }

        p {
            font-size: 1.6rem;
            line-height: 140%;
        }

        .ingredientsContainer {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2.4rem;
        }
    }

    > .amountControls {
        display: flex;
        gap: 1.6rem;
        margin-top: 4.8rem;

        div {
            display: inherit;
            align-items: center;
            gap: 1.6rem;
            font-size: 1.6rem;
            
            button {
                display: grid;
                place-content: center;
                background: transparent;
                border: none;
            }
        }

        > button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: ${({ theme }) => theme.COLORS.TINTS.TOMATO100};
            font-size: 0.9rem;
            padding: 0.8rem 1.6rem;
            border: none;
            border-radius: 0.3rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
        align-items: flex-start;

        > .mealDetails {
            text-align: start;

            h3 {
                font-size: 4rem;
            }
    
            .ingredientsContainer {
                justify-content: flex-start;
            }
        }
    }
`;

export const Tags = styled.span`
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.DARK.DARK1000};
`;