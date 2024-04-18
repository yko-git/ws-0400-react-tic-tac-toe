import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";
import Reload from "./Reload";
import ItemsList from "./ItemsList";
import StateBoard from "./StateBoard";

const BoardMain = styled.div`
  padding: 16px;
`;
const Footer = styled.div`
  text-align: center;
`;

const List = styled.div`
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
  width: 144px;
  margin: 0 auto;
`;

export default function Board() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [judge, setJudge] = useState("starting");

  function handleClick(i) {
    if (squares[i] || judge !== "starting") {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "○";
    } else {
      nextSquares[i] = "×";
    }

    const winner = calculateWinner(nextSquares);
    // debugger;
    if (winner) {
      setJudge("Win" + winner);
    } else if (count === 8) {
      setJudge("draw");
    }

    setCount(count + 1);
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }

  return (
    <>
      <ItemsList xIsNext={xIsNext} />
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
        <StateBoard judge={judge} />
        <Reload />
      </Footer>
    </>
  );
}
