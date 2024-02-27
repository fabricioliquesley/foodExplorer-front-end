import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    background: ${({theme}) => theme.COLORS.GRADIENTS.GRADIENTS200};
    border-radius: 0.2917rem;
    margin: 2rem;
    padding: 1rem;
    
    > img {
        position: absolute;
        opacity: 0.8;
        bottom: 0;
        left: -15px;
        width: 10rem;
    }
    
    > div {
        margin-left: 6rem;
        width: 100%;
        max-width: 20rem;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT300};
        z-index: 1;

        h2 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`;