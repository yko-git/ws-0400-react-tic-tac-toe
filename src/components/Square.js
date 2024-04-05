import styled from "styled-components";

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

export default function Square({ value, onSquareClick }) {
  return (
    <>
      <Cell className="square" onClick={onSquareClick}>
        {value}
      </Cell>
    </>
  );
}
