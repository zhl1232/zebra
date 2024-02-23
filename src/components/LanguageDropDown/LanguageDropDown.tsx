import React, { useState } from "react";
// import globe from "../../images/icons/globe.svg";
// import globeRed from "../../images/icons/globeRed.svg";
import LanguageList from "../LanguageList/LanguageList";

export default function LanguageDropDown() {
  const [langPopup, setLangPopup] = useState(false);
  const [langList, setLangList] = useState([
    { lang: "en", text: "English", selected: true, hovered: false },
    { lang: "es", text: "Español", selected: false, hovered: false },
    // { lang: "fr", text: "Français", selected: false, hovered: false },
  ]);
  
  function getLangPopup(over: boolean) {
    setLangPopup(over);
  }

  function getSelected(lang: string) {
    setLangList((prevState) => {
        return prevState.map((language) =>
          lang === language.lang
            ? { ...language, selected: true }
            : { ...language, selected: false }
    )})
  }

  function getHovered(lang: string) {
    setLangList((prevState) => {
        return prevState.map((language) =>
          lang === language.lang
            ? { ...language, hovered: true }
            : { ...language, hovered: false }
    )})
  }

  return (
    <div
      className="flex justify-end items-center relative lg:justify-center"
      onMouseOver={() => getLangPopup(true)}
      onMouseOut={() => getLangPopup(false)}
    >
      <div className="w-12 h-12 flex justify-center items-center">
        {/* <img
          src={langPopup ? globeRed : globe}
          className="h-6 leading-6 cursor-pointer hover:text-[#343434]"
          alt="language icon"
        /> */}
      </div>
      {langPopup && 
        <LanguageList getLangPopup={getLangPopup} getSelected={getSelected} getHovered={getHovered} langList={langList} />
      }
    </div>
  );
}
