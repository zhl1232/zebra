import styled from "styled-components";

export const SpellingCardHolder = styled.div`
  
`;

export const IconHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 50px;
`;

export const Icon = styled.div`
  font-size: 32px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  &:hover {
    color: #4d8080 !important;
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
