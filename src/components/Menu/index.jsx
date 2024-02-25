import { Container } from "./style";
import { Input } from "../Input";

export function Menu({ status }) {
    return (
        <Container $status={status}>
            <Input 
                variant
                placeholder="Busque por pratos ou ingredientes"
                type="text"
            />
            <button>
                Sair
            </button>
        </Container>
    )
}