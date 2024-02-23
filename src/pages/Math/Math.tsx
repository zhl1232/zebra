import React from "react";
import { ButtonList } from "components";
import { useOutletContext } from "react-router-dom";

export default function Math(props) {
  const { numbers } = useOutletContext();

  return <ButtonList list={numbers} category="math" />;
}
