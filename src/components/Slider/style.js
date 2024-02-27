import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 100vw;
    /* border: 1px solid red; */
    padding-left: 2rem;
    margin-top: 3.2rem;

    > h3, .title, button, span {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT300};
    }

    > .slider {
        width: 100%;

        .slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.2rem;
            width: 20rem;
            height: fit-content;
            background: ${({ theme }) => theme.COLORS.DARK.DARK200};
            border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK300};
            border-radius: 0.8rem;
            padding: 2.4rem;
            cursor: pointer;

            .favoriteBtn {
                position: absolute;
                top: 1.6rem;
                right: 1.6rem;
                width: fit-content;
                display: grid;
                place-content: center;
                background: transparent;
                border: none;
                font-size: 2.5rem;
            }

            img {
                width: 8.8rem;
            }

            .title {
                font-size: 1.4rem;
                text-align: center;
                line-height: 2.4rem;

                &::after {
                    content: " >";
                }
            }

            .preco {
                color: ${({ theme }) => theme.COLORS.TINTS.CAKE200};
                font-size: 1.6rem;
            }

            div {
                display: flex;
                align-items: center;
                gap: 1.4rem;

                button {
                    display: grid;
                    place-content: center;
                    background: transparent;
                    border: none;
                    font-size: 2.5rem;
                }

                span {
                    font-size: 1.6rem;
                }
            }

            button {
                width: 100%;
            }
        }
    }
`;