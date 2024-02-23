import styled, { keyframes } from "styled-components";

export const DotPicture = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const UnitGroups = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const UnitHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 15px;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const example = keyframes`
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      background-color: orange;
      left: 100px;
      top: 100px;
    }
    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: green;
      left: 0px;
      top: 200px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
`;

export const UnitImage = styled.img`
  width: ${props => props.unit === 1 ? "205px" : `${205 / props.size}px`};
  height: ${props => props.unit === 1 ? "205px" : `${205 / props.size}px`};
  gap: 10px;
  rotate: 270deg;
  // animation: ${example} 4s infinite;
`;
