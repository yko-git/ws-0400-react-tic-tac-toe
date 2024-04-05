import { useState } from "react";
import styled from "styled-components";

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

const Lcontainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Lboard = styled.div`
  padding: 16px;
`;
const Lfooter = styled.div`
  text-align: center;
`;

const Items = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;
`;
const Item = styled.div`
  border-bottom: ${(props) => (props.isActive ? "4px solid black" : "none")};
  width: 100%;
  flex-grow: 1;
  padding: 8px;
`;

const List = styled.div`
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
  width: 144px;
  margin: 0 auto;
`;

const Cell = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  height: 48px;
  width: 48px;
  cursor: pointer;
  text-align: center;
  font-size: 2rem;
`;

const State = styled.div`
  padding: 8px;
`;

const Restart = styled.div`
  display: inline-block;
  width: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

function Square({ value, onSquareClick }) {
  return (
    <>
      <Cell className="square" onClick={onSquareClick}>
        {value}
      </Cell>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Reload() {
  function loadFunc() {
    window.location.reload();
  }

  return (
    <div>
      <Restart onClick={loadFunc}>RESTART</Restart>
    </div>
  );
}

function Board() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Win" + winner;
  } else if (count === 9) {
    status = "draw";
  } else {
    status = "starting";
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "○";
    } else {
      nextSquares[i] = "×";
    }
    setCount(count + 1);
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }

  return (
    <>
      <Items>
        <Item isActive={xIsNext}>○</Item>
        <Item isActive={!xIsNext}>×</Item>
      </Items>
      <Lboard>
        <List>
          {squares.map((item, index) => {
            return (
              <Square value={item} onSquareClick={() => handleClick(index)} />
            );
          })}
        </List>
      </Lboard>
      <Lfooter>
        <State>{status}</State>
        <Reload />
      </Lfooter>
    </>
  );
}

export default function Game() {
  return (
    <>
      <Html>
        <Lcontainer>
          <div>
            <header>
              <H1>Tic Tac Toe</H1>
            </header>

            <Board />
          </div>
        </Lcontainer>
      </Html>
    </>
  );
}
