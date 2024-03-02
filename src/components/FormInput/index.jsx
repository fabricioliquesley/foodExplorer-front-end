import { Container } from "./style";
import { FiUpload } from "react-icons/fi";

export function FormInput({ label, variant, ...res }) {
    return (
        <Container $variant={variant}>
            <label htmlFor="inputLabel">{label}</label>
            <div>
                {
                    variant == "file" &&
                    <>
                        <FiUpload size={24} />
                        <p>Selecione imagem</p>
                    </>
                }
                <input type="text" id="inputLabel" {...res} />

            </div>
        </Container>
    );
}