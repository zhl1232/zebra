import React from "react";
import { ButtonList, ClearStorage } from "components";
import { useOutletContext } from "react-router-dom";

export default function Science(props) {
  const { animals } = useOutletContext();
  
  return (
    <>
      <ButtonList list={animals} category="science" />
      <ClearStorage />
    </>
  );
}
