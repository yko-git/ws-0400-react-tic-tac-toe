import styled from "styled-components";
import calculateWinner from "./calculateWinner";

const State = styled.div`
  padding: 8px;
`;

export default function StateBoard({ squares, count }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Win" + winner;
  } else if (count === 9) {
    status = "draw";
  } else {
    status = "starting";
  }

  return (
    <>
      <State>{status}</State>
    </>
  );
}
