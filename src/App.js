import { useState } from "react";
import styled from "styled-components";

function Square({ value, onSquareClick }) {
  return (
    <>
      <Cell className="square" onClick={onSquareClick}>
        {value}
      </Cell>
    </>
  );
}
function Board() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Win" + winner;
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

    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }

  return (
    <>
      <Items>
        <Item className={xIsNext ? "isActive" : ""}>○</Item>
        <Item className={xIsNext ? "" : "isActive"}>×</Item>
      </Items>
      <Lboard>
        <Table>
          <tbody>
            <tr className="row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </tr>
            <tr className="row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </tr>
            <tr className="row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </tr>
          </tbody>
        </Table>
      </Lboard>
      <Lfooter>
        <State>{status}</State>
        <Reload />
      </Lfooter>
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
      <Btn className="Restart" onClick={loadFunc}>
        RESTART
      </Btn>
    </div>
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
  width: 100%;
  flex-grow: 1;
  padding: 8px;
  &.isActive {
    border-bottom: 4px solid black;
  }
`;

const Table = styled.table`
  background: #000;
  border: 2px solid #fefefe;
  margin: 0 auto;
`;

const Cell = styled.td`
  background: #fefefe;
  height: 48px;
  width: 48px;
  cursor: pointer;
  text-align: center;
  font-size: 2rem;
`;

const State = styled.div`
  padding: 8px;
  &.js-state {
    padding: 8px;
  }
`;

const Btn = styled.div`
  display: inline-block;
  width: 100%;
  &.Restart {
    border: 2px solid #000;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`;
