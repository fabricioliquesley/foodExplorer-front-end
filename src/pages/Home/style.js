import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.4rem 1fr max-content;
    width: 100%;
    height: 100vh;
    
    > main {
        overflow: ${({$statusMenu}) => $statusMenu == "open" ? "hidden" : "visible"};
        position: relative;
    }
`;