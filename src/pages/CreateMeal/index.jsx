import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Tags } from "../../components/Tags";

import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { useState } from "react";

export function CreateMeal() {
    const [statusMenu, setStatusMenu] = useState("close");

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    const ingredients = [
        "frango",
        "milho"
    ]

    return (
        <Container $statusMenu={statusMenu}>
            <Header
                menuStatus={statusMenu}
                orderAmount={0}
                onClick={toggleMenu}
            />
            <main>
                <Menu status={statusMenu} />
                <Content>
                    <Link to={-1}>
                        <IoIosArrowBack />
                        voltar
                    </Link>
                    <h2>Novo prato</h2>
                    <FormInput
                        label={"Imagem do prato"}
                        variant={"file"}
                        type={"file"}
                        placeholder={"Ex.: Salada Ceasar"}
                    />
                    <FormInput
                        label={"Nome"}
                        type={"text"}
                        placeholder={"Ex.: Salada Ceasar"}
                    />
                    <Select
                        label={"Categoria"}
                    />
                    <Tags
                        label={"Ingredientes"}
                        data={ingredients}
                    />
                    <FormInput
                        label={"Preço"}
                        type={"number"}
                        placeholder={"R$ 00,00"}
                    />
                    <TextArea
                        label={"Descrição"}
                        placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
                    />
                    <Button title={"Salvar alterações"} />
                </Content>
            </main>
            <Footer />
        </Container>
    );
}