import { Container } from "./style";
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Banner } from "../../components/Banner";
import { Slider } from "../../components/Slider";

import { useState } from "react";

export function Home() {
    const [statusMenu, setStatusMenu] = useState("close");

    const [width, setWidth] = useState(window.document.defaultView.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.document.defaultView.innerWidth);
    })

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    const data = [
        {
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
        },
        {
            image_path: "/src/assets/mail_example.png",
            name: "Macarrão à Carbonara",
            category: "Prato Principal",
            ingredients: [
                "macarrão",
                "bacon",
                "ovos",
                "queijo parmesão"
            ],
            preco: 17.50,
            description: "Um prato clássico italiano, preparado com bacon crocante, ovos cremosos e queijo parmesão. Serve 1 pessoa."
        },
        {
            image_path: "/src/assets/mail_example.png",
            name: "Risoto de Camarão",
            category: "Prato Principal",
            ingredients: [
                "arroz arbóreo",
                "camarão",
                "creme de leite",
                "queijo parmesão"
            ],
            preco: 23.99,
            description: "Risoto cremoso preparado com camarões frescos, servido com uma generosa porção de queijo parmesão ralado. Serve 1 pessoa."
        },
        {
            image_path: "/src/assets/mail_example.png",
            name: "Strogonoff de Carne",
            category: "Prato Principal",
            ingredients: [
                "carne",
                "creme de leite",
                "molho de tomate",
                "cogumelos champignon"
            ],
            preco: 19.95,
            description: "Um delicioso prato feito com ingredientes de extrema qualidade, serve 1 pessoa. Acompanha arroz e batata palha."
        },
        {
            image_path: "/src/assets/mail_example.png",
            name: "Strogonoff de Camarão",
            category: "Prato Principal",
            ingredients: [
                "carne",
                "creme de leite",
                "molho de tomate",
                "cogumelos champignon"
            ],
            preco: 19.95,
            description: "Um delicioso prato feito com ingredientes de extrema qualidade, serve 1 pessoa. Acompanha arroz e batata palha."
        },
    ]

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
                    <Menu status={statusMenu} />
                }
                <Banner />
                <Slider title={"Refeições"} data={data} />
                <Slider title={"Pratos principais"} data={data} />
                <Slider title={"Bebidas"} data={data} />
            </main>
            <Footer />
        </Container>
    );
}