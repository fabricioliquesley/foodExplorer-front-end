import { Container } from "./style";
import { Logo } from "../../components/Logo";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <Container>
            <Logo />
            <Form>
                <h2 className="poppins-medium">
                    Faça login
                </h2>
                <fieldset>
                    <label htmlFor="email" className="roboto-regular">Email</label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="roboto-regular">Senha</label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </fieldset>
                <Button title={"Entrar"} />
                <Link
                    className="poppins-medium"
                    to={"/register"}
                >
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
}