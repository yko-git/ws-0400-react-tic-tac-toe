import styled from "styled-components";

const Restart = styled.div`
  display: inline-block;
  width: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

export default function Reload() {
  function loadFunc() {
    window.location.reload();
  }

  return (
    <div>
      <Restart onClick={loadFunc}>RESTART</Restart>
    </div>
  );
}
