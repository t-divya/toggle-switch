import styled from "styled-components";
import "./App.css";
import ToggleSwitch from "./ToggleSwitch";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100%;
`;

function App() {
  return (
    <ToggleContainer>
      <ToggleSwitch />
    </ToggleContainer>
  );
}

export default App;
