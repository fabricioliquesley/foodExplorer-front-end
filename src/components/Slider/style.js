import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 100vw;
    /* border: 1px solid red; */
    padding-left: 2rem;
    margin-top: 3.2rem;

    > .slider {
        width: 100%;

        .slide {
            max-width: 20rem;
            height: 20rem;
            background: ${({theme}) => theme.COLORS.DARK.DARK200};
            border: 1px solid ${({theme}) => theme.COLORS.DARK.DARK300};
            border-radius: 0.8rem;
            cursor: pointer;
        }
    }

`;