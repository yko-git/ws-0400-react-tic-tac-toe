import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import calculateWinner from "./calculateWinner";
import Reload from "./Reload";

const BoardMain = styled.div`
  padding: 16px;
`;
const Footer = styled.div`
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

const State = styled.div`
  padding: 8px;
`;

export default function Board() {
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
      <BoardMain>
        <List>
          {squares.map((item, index) => {
            return (
              <Square value={item} onSquareClick={() => handleClick(index)} />
            );
          })}
        </List>
      </BoardMain>
      <Footer>
        <State>{status}</State>
        <Reload />
      </Footer>
    </>
  );
}
