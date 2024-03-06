import { Container } from "./style";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Menu({ status, variant }) {
    return (
        <Container $status={status}>
            <Input
                variant
                placeholder="Busque por pratos ou ingredientes"
                type="text"
            />
            <div className="buttons">
                {
                    variant == "admin" &&
                    <Link to={"/create"}>
                        Novo prato
                    </Link>
                }
                <button>
                    Sair
                </button>
            </div>
        </Container>
    )
}