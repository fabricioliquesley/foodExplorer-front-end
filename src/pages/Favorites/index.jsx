import { Container, FavoritesContainer } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

import { useState } from "react";

export function Favorites() {
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

    const user = {
        accountType: "common"
    }

    const favorites = [
        {
            img: "/src/assets/mail_example.png",
            name: "Salada Radish",
        },
        {
            img: "/src/assets/mail_example.png",
            name: "Salada Radish",
        },
        {
            img: "/src/assets/mail_example.png",
            name: "Salada Radish",
        },
        {
            img: "/src/assets/mail_example.png",
            name: "Salada Radish",
        },
        {
            img: "/src/assets/mail_example.png",
            name: "Salada Radish",
        },
    ]

    return (
        <Container $statusMenu={statusMenu}>
            <Header
                menuStatus={statusMenu}
                onClick={toggleMenu}
                variant={user.accountType}
                orderAmount={5}
            />
            <main>
                {
                    width < 1024 &&
                    <Menu status={statusMenu} variant={user.accountType} />
                }
                <h2 className="poppins-medium">Meus favoritos</h2>
                <FavoritesContainer>
                    {
                        favorites.map((favorite, index) => (
                            <div key={index}>
                                <img 
                                    src={favorite.img}
                                    alt="Imagem ilustrativa do prato" 
                                />
                                <div>
                                    <p className="poppins-medium">
                                        {favorite.name}
                                    </p>
                                    <button>
                                        Remover dos Favoritos
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </FavoritesContainer>
            </main>
            <Footer />
        </Container>
    )
}