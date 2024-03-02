import { Container } from "./style";

export function TextArea({label, ...res}){
    return (
        <Container>
            <label htmlFor="textAreaLabel">{label}</label>
            <textarea id="textAreaLabel" maxLength={225} {...res}></textarea>
        </Container>
    )
}