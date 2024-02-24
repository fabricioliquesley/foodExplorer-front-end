import { Container } from "./style";

export function Button({title, ...res}){
    return (
        <Container {...res}>
            {title}
        </Container>
    )
}