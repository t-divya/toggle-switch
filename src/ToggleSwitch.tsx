import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import COLORS from "./color";

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 250px;
  height: 125px;
  background: ${({ checked }) => (checked ? COLORS.GREEN : COLORS.GRAY)};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "14px" : "calc(55% - 5px)")};
    top: 12px;
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(true);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("---", e.target.checked);
    setSwitchState(!switchState);
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}
