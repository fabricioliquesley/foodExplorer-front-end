import { styled } from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoint";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK.DARK600};
    padding: 3.2rem;

    > p {
        font-size: 1rem;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT200}
    }

    @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
        flex-direction: column;
    }
`;