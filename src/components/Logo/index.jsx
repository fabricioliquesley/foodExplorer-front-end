import { Container } from "./style";
import explorerLogo from "../../../public/favicon.svg"

export function Logo({variant = false}){
    return (
        <Container>
            <img src={explorerLogo} alt="Logo do food explorer" />
            <h1 className="roboto-bold">food explorer</h1>
            {
                variant&&
                <span className="roboto-regular">admin</span>
            }
        </Container>
    )
}