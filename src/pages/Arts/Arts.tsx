import React from "react";
import { ButtonList } from "components";
import { useOutletContext, useParams } from "react-router-dom";

export default function Math() {
  const { instruments } = useOutletContext();

  return <ButtonList list={instruments} category="arts" />;
}