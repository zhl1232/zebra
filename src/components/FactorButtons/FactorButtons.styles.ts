import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const FactorHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: stretch;
  width: 320px;
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  }
`;

export const NumberButton = styled.button`
  width: 75px;
  height: 50px;
  font-size: 32px;
  font-family: inherit;
  border: 1px solid black !important;
  text-align: center;
  border: 1px solid #3d674c /*Spring Leaves*/;
  border-radius: 7.5px;
  transition: all 0.5s ease-out;
  color: #3d674c /*Spring Leaves*/;
  box-shadow: -5px 5px #d54a0a /*Tia Maria*/;
  background-color: #e3dac9;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: -5px 5px #558f69;
    color: #558f69;
    background-color: #fcd783;
  }
`;

export const CloseIcon = styled.div`
  font-size: 36.57px;
  cursor: pointer;
  color: #ff6347;
  display: flex;
  align-items: center;
  &:hover {
    color: #ff7d66 !important;
  }
`;
