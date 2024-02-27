import { Container } from "./style";
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Banner } from "../../components/Banner";
import { Slider } from "../../components/Slider";

import { useState } from "react";

export function Home() {
    const [statusMenu, setStatusMenu] = useState("close");

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    const data = [
        {
            "image_path": "images/strogonoff.png",
            "name": "Strogonoff de Frango",
            "category": "Prato Principal",
            "ingredients": [
                "frango",
                "creme de leite",
                "molho de tomate",
                "cogumelos champignon"
            ],
            "preco": 19.95,
            "description": "Um delicioso prato feito com ingredientes de extrema qualidade, serve 1 pessoa. Acompanha arroz e batata palha."
        },
        {
            "image_path": "images/carbonara.png",
            "name": "Macarrão à Carbonara",
            "category": "Prato Principal",
            "ingredients": [
                "macarrão",
                "bacon",
                "ovos",
                "queijo parmesão"
            ],
            "preco": 17.50,
            "description": "Um prato clássico italiano, preparado com bacon crocante, ovos cremosos e queijo parmesão. Serve 1 pessoa."
        },
        {
            "image_path": "images/risoto.png",
            "name": "Risoto de Camarão",
            "category": "Prato Principal",
            "ingredients": [
                "arroz arbóreo",
                "camarão",
                "creme de leite",
                "queijo parmesão"
            ],
            "preco": 23.99,
            "description": "Risoto cremoso preparado com camarões frescos, servido com uma generosa porção de queijo parmesão ralado. Serve 1 pessoa."
        }
        
    ]

    return (
        <Container $statusMenu={statusMenu}>
            <Header
                menuStatus={statusMenu}
                orderAmount={5}
                onClick={() => toggleMenu()}
            />
            <main>
                <Menu status={statusMenu} />
                <Banner />
                <Slider title={"Refeições"} data={data}/>
            </main>
            <Footer />
        </Container>
    );
}