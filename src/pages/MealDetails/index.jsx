import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container, Content, Tags } from "./style";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { PiReceipt } from "react-icons/pi";

import { useState } from "react";

export function MealDetails() {
    const [statusMenu, setStatusMenu] = useState("close");

    const [width, setWidth] = useState(window.document.defaultView.innerWidth);

    let [itemAmount, setItemAmount] = useState(0);

    window.addEventListener("resize", () => {
        setWidth(window.document.defaultView.innerWidth);
    })

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    function decrementItemAmount() {
        if (itemAmount > 0) {
            setItemAmount(itemAmount -= 1);
        }
    }

    function incrementItemAmount() {
        setItemAmount(itemAmount += 1);
    }

    const meal = {
        image_path: "/src/assets/mail_example.png",
        name: "Strogonoff de Frango",
        category: "Prato Principal",
        ingredients: [
            "frango",
            "creme de leite",
            "molho de tomate",
            "cogumelos champignon"
        ],
        preco: 19.95,
        description: "Um delicioso prato feito com ingredientes de extrema qualidade, serve 1 pessoa. Acompanha arroz e batata palha."
    }

    return (
        <Container $statusMenu={statusMenu}>
            <Header
                menuStatus={statusMenu}
                orderAmount={5}
                onClick={() => toggleMenu()}
            />
            <main>
                {
                    width < 1024 &&
                    <Menu
                        status={statusMenu}
                    />
                }
                <Content>
                    <Link to={-1} className="poppins-medium">
                        <IoIosArrowBack />
                        voltar
                    </Link>
                    <img src={meal.image_path} alt="Imagem ilustrativa do prato" />
                    <div className="mealDetails">
                        <h3 className="poppins-medium">{meal.name}</h3>
                        <p className="poppins-light">
                            {meal.description}
                        </p>
                        <div className="ingredientsContainer">
                            {
                                meal.ingredients.map((ingredient, index) => (
                                    <Tags key={index}>{ingredient}</Tags>
                                ))
                            }
                        </div>
                    </div>
                    <div className="amountControls">
                        <div>
                            <button
                                onClick={() => decrementItemAmount()}
                            >
                                <HiMiniMinus size={20}/>
                            </button>
                            <span className='roboto-regular'>
                                {String(itemAmount).padStart(2, "0")}
                            </span>
                            <button
                                onClick={() => incrementItemAmount()}
                            >
                                <HiMiniPlus size={20}/>
                            </button>
                        </div>
                        <button>
                            <PiReceipt size={20}/>
                            pedir ∙ 
                            R$ {String(meal.preco).replace(".", ",")}
                        </button>
                    </div>
                </Content>
            </main>
            <Footer />
        </Container>
    )
}