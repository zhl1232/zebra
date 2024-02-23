import React, {useState} from "react";
import { LetterTileHolder } from "components";
import { IconHolder, CloseIcon, Icon } from "./SpellingCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faObjectUngroup,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function SpellingCard({ value, alphabetLetterSounds, item, xSectionCloser }) {

  const [isSpelled, setIsSpelled] = useState(true);

  const setSpeller = () => {
    setIsSpelled(!isSpelled)
  }

    return (
      <div className="flex flex-row flex-wrap w-full justify-center">
        <LetterTileHolder
          value={value}
          alphabetLetterSounds={alphabetLetterSounds}
          tiles={item.tiles}
          syllables={item.syllables}
          name={item.name}
          isSpelled={isSpelled}
        />
        <IconHolder>
          <Icon onClick={() => setSpeller()}>
            {(isSpelled) ? (
              <FontAwesomeIcon icon={faObjectGroup} />
            ) : (
              <FontAwesomeIcon icon={faObjectUngroup} />
            )}
            
          </Icon>
          <CloseIcon onClick={() => xSectionCloser()}>
            <FontAwesomeIcon icon={faRectangleXmark} />
          </CloseIcon>
        </IconHolder>
      </div>
    );
}
