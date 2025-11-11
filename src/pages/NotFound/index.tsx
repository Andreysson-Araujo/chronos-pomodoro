import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina Não Encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, error
          non eveniet consequatur eligendi inventore quos aut consectetur iure
          provident vel debitis id perferendis atque numquam quod laudantium
          unde enim!
        </p>
      </Container>
    </MainTemplate>
  );
}
