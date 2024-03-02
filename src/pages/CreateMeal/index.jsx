import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";
import { Tags } from "../../components/Tags";
import { Tag } from "../../components/Tag";

import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

export function CreateMeal() {
    const [statusMenu, setStatusMenu] = useState("close");
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    function addIngredientTag() {
        if (!inputValue) {
            return
        }

        setIngredients(prevState => [...prevState, inputValue]);
        setInputValue("");
    }

    function removeIngredientTag(tagToDelete) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== tagToDelete));
    }

    function saveMeal() {
        alert("Save")
    }

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
                    <Link to={-1} className="link">
                        <IoIosArrowBack />
                        voltar
                    </Link>
                    <h2 className="title">Novo prato</h2>
                    <FormInput
                        label={"Imagem do prato"}
                        variant={"file"}
                        type={"file"}
                        placeholder={"Ex.: Salada Ceasar"}
                        className={"imageInput"}
                    />
                    <FormInput
                        label={"Nome"}
                        type={"text"}
                        placeholder={"Ex.: Salada Ceasar"}
                        className={"inputName"}
                    />
                    <Select
                        label={"Categoria"}
                        className={"inputCategory"}
                    />
                    <Tags
                        label={"Ingredientes"}
                        addClick={addIngredientTag}
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        className={"ingredientsTag"}
                    >
                        {
                            ingredients.map((tag, index) => (
                                <Tag key={index}>
                                    <p>{tag}</p>
                                    <button onClick={() => removeIngredientTag(tag)}>
                                        <IoCloseOutline size={20} />
                                    </button>
                                </Tag>
                            ))
                        }
                    </Tags>
                    <FormInput
                        label={"Preço"}
                        type={"number"}
                        placeholder={"R$ 00,00"}
                        className={"inputPreco"}
                    />
                    <TextArea
                        label={"Descrição"}
                        placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
                        className={"textArea"}
                    />
                    <Button
                        title={"Salvar alterações"}
                        variant
                        onClick={saveMeal}
                        className={"saveButton"}
                    />
                </Content>
            </main>
            <Footer />
        </Container>
    );
}