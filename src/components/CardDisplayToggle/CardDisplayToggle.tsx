import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { SelectedIcon, Icon } from "./CardDisplayToggle.styles";

export default function CardDisplayToggle({ list, category }) {
  const [selected, setSelected] = useState(true);
  const setToggle = () => {
    setSelected(!selected);
  };

  return (
    <div
      className="flex flex-row self-center items-center justify-around border-2 border-solid border-[#3d674c] rounded-md h-8 w-20 transition-all duration-5000"
    >
      {selected ? (
        <>
          <SelectedIcon onClick={() => setToggle()}>
            <FontAwesomeIcon style={{ margin: "0 auto" }} icon={faTableCells} />
          </SelectedIcon>
          <Icon onClick={() => setToggle()}>
            <Link to={`/${category}/${list[0].id}`}>
              <FontAwesomeIcon icon={faFileExport} />
            </Link>
          </Icon>
        </>
      ) : (
        <>
          <Icon onClick={() => setToggle()}>
            <FontAwesomeIcon icon={faTableCells} />
          </Icon>
          <SelectedIcon onClick={() => setToggle()}>
            <Link to={`/${category}/${list[0].id}`}>
              <FontAwesomeIcon icon={faFileExport} />
            </Link>
          </SelectedIcon>
        </>
      )}
    </div>
  );
}
