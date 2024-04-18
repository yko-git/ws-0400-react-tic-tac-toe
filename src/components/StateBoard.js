import styled from "styled-components";

const State = styled.div`
  padding: 8px;
`;

export default function StateBoard({ judge }) {
  return (
    <>
      <State>{judge}</State>
    </>
  );
}
