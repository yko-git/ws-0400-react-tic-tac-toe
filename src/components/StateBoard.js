import styled from "styled-components";
import calculateWinner from "./calculateWinner";
import { useState } from "react";

const State = styled.div`
  padding: 8px;
`;

export default function StateBoard({ squares, count }) {
  debugger;
  const [judge, setJudge] = useState("starting");
  const winner = calculateWinner(squares);
  if (winner) {
    setJudge("Win" + winner);
  } else if (count === 9) {
    setJudge("draw");
  }

  return (
    <>
      <State>{judge}</State>
    </>
  );
}
