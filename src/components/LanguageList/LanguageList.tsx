import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../features/playing/playingSlice";

interface LangList {
    lang: string;
    text: string;
    selected: boolean;
    hovered: boolean;
}

interface LanguageListProps {
  getLangPopup: (option: boolean) => void;
  getSelected: (lang: string) => void;
  getHovered: (lang: string) => void;
  langList: LangList[];
}

const LanguageList: React.FC<LanguageListProps> = ({ getLangPopup, getSelected, getHovered, langList }) => {
  const dispatch = useDispatch();

  return (
    <div className="absolute top-12 bg-[#fcd783] shadow-xl rounded-lg w-fit h-fit z-10 shadow-xl p-4">
      {langList.map((lang) => {
        return (
          <div
            key={lang.lang}
            className="cursor-pointer flex flex-row items-center gap-4"
            onClick={() => {
                getSelected(lang.lang);
                dispatch(change(lang.lang));
                getLangPopup(false);
            }}
            onMouseOver={() => getHovered(lang.lang)}
            onMouseOut={() => getHovered(lang.lang)}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#ff6347] flex justify-center items-center">
              <div className={`w-5 h-5 rounded-full bg-[${lang.selected ? "#ff6347" : "none"}] flex items-center justify-center`}>
                <div className={`${lang.hovered ? "w-3 h-3" : "w-0 h-0" } rounded-full bg-[#ff6347]`}></div>
              </div>
            </div>
            <div className="text-[24px] hover:text-[#ff6347]">{lang.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageList;
