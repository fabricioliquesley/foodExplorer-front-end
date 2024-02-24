import { Container } from "./style";
import { Logo } from "../../components/Logo";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    return (
        <Container>
            <Logo />
            <Form>
                <fieldset>
                    <label htmlFor="name" className="roboto-regular">Email</label>
                    <Input
                        id="name"
                        type="name"
                        placeholder="Exemplo: Maria da Silva"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className="roboto-regular">Email</label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="roboto-regular">Email</label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </fieldset>
                <Button title={"Criar conta"}/>
            </Form>
        </Container>
    )
}