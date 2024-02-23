import styled from "styled-components";

export const Name = styled.div`
  font-size: 42px;
  align-self: center;
  line-height: 61px;
  height: 62px;
  margin-bottom: 0px;
  margin-top: 0px;
  &:hover {
    color: #2f4f4f !important;
    cursor: pointer;
  }
  .name {
    font-size: 40px;
    align-self: center;
    line-height: 61px;
    height: 62px;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    width: 185px;
    line-height: 35px;
  }
`;

export const Icon = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const IconDisabled = styled.div`
  font-size: 27px;
  cursor: not-allowed;
  color: #8fbcbc;
  display: flex;
  align-items: center;
`;