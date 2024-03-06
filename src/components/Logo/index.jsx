import { Container } from "./style";
import explorerLogo from "/explorer.svg"

export function Logo({ variant = false }) {
    return (
        <Container $variant={variant}>
            <div>
                <img src={explorerLogo} alt="Logo do food explorer" />
                <h1 className="roboto-bold">food explorer</h1>
            </div>
            {
                variant == "admin" &&
                <span className="roboto-regular">admin</span>
            }
        </Container>
    )
}