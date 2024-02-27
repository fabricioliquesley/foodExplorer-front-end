import { Container } from "./style";
import bannerImg from "../../assets/banner_image_sm.png";

export function Banner(){
    return (
        <Container>
            <img src={bannerImg} alt="Imagem ilustrativa de frutas e biscoitos" />
            <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    )
}