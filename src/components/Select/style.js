import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;

    > label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT400};
        line-height: 100%;
    }

    > .select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${({ theme }) => theme.COLORS.DARK.DARK900};
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT400};
        font-size: 1.4rem;
        padding: 1.6rem;
        border-radius: 0.5rem;

        svg {
            transform: ${({$selectStatus}) => $selectStatus == "open" ? "rotate(180deg)" : "rotate(0deg)"};
            transition: .4s;
        }
    }
`;

export const Options = styled.ul`
    display: ${({$selectStatus}) => $selectStatus == "open" ? "flex" : "none"};
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK.DARK900};
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT400};
    font-size: 1.4rem;
    padding: 1.6rem;
    border-radius: 0.5rem;
    list-style: none;
`;