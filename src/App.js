import styled from "styled-components";
import Board from "./components/Board";

const Html = styled.html`
  background: white;
  font-family: "Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma,
    Sans-Serif;
  font-size: 15px;
  line-height: 1.5;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Game() {
  return (
    <Html>
      <Container>
        <div>
          <header>
            <H1>Tic Tac Toe</H1>
          </header>
          <Board />
        </div>
      </Container>
    </Html>
  );
}
