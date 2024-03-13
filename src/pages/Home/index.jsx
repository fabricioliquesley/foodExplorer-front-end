import { Container } from "./style";
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Banner } from "../../components/Banner";
import { Slider } from "../../components/Slider";

import { useEffect, useState } from "react";

export function Home() {
    const [statusMenu, setStatusMenu] = useState("close");

    const [width, setWidth] = useState(window.document.defaultView.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.document.defaultView.innerWidth);
    })

    const [itemsQuantity, setItemsQuantity] = useState(0)

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    function fetchOrderItems() {
        setItemsQuantity(JSON.parse(localStorage.getItem("@foodExplorer:orderItems"))?.length || 0)
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
            price: 19.95,
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
            price: 17.50,
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
            price: 23.99,
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
            price: 19.95,
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
            price: 19.95,
            description: "Um delicioso prato feito com ingredientes de extrema qualidade, serve 1 pessoa. Acompanha arroz e batata palha."
        },
    ]

    const user = {
        accountType: "common"
    }

    useEffect(() => {
        fetchOrderItems();

        setInterval(fetchOrderItems, 5000);
    }, [])

    return (
        <Container $statusMenu={statusMenu}>
            <Header
                menuStatus={statusMenu}
                orderAmount={itemsQuantity}
                onClick={() => toggleMenu()}
                variant={user.accountType}
            />
            <main>
                {
                    width < 1024 &&
                    <Menu status={statusMenu} variant={user.accountType} />
                }
                <Banner />
                <Slider
                    title={"Refeições"}
                    data={data}
                    variant={user.accountType}
                />
                <Slider
                    title={"Pratos principais"}
                    data={data}
                    variant={user.accountType}
                />
                <Slider
                    title={"Bebidas"}
                    data={data}
                    variant={user.accountType}
                />
            </main>
            <Footer />
        </Container>
    );
}