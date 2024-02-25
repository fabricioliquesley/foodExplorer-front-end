import { Container } from "./style";
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

import { useState } from "react";

export function Home() {
    const [statusMenu, setStatusMenu] = useState("close");

    function toggleMenu() {
        if (statusMenu == "open") {
            return setStatusMenu("close");
        }

        return setStatusMenu("open");
    }

    return (
        <Container $statusMenu={statusMenu}>
            <Header 
                menuStatus={statusMenu}
                orderAmount={5} 
                onClick={() => toggleMenu()} 
            />
            <main>
                <Menu status={statusMenu}/>
                <h2>Home</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequuntur cumque architecto aspernatur modi! Dolorem quod quia earum expedita ratione nesciunt cum repudiandae. Sit rerum quidem deserunt expedita praesentium?</p>
            </main>
            <Footer />
        </Container>
    );
}