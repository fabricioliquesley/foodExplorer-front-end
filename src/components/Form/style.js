import { styled } from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    max-width: 40rem;
    padding: 0 3rem;
    /* margin-bottom: 10rem; */

    fieldset {
        border: none;

        > label {
            display: block;
            color: ${({theme}) => theme.COLORS.LIGHT.LIGHT400};
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
    }
`;