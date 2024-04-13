import styled from "styled-components";

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

export default function ItemsList({ xIsNext }) {
  return (
    <Items>
      <Item isActive={xIsNext}>○</Item>
      <Item isActive={!xIsNext}>×</Item>
    </Items>
  );
}
