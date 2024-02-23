import React from "react";

export default function LetterTile({ letter, letterSound }) {
  const letters = letter.toUpperCase();
  const playAudio = () => {
    new Audio(letterSound[letters]).play();
  };
  return letter !== "-" ? (
    <div onClick={playAudio} className="w-11 h-11 drop-shadow-md bg-[#e3dac9] leading-10 text-4xl text-center border border-[#022645] rounded-lg cursor-pointer hover:drop-shadow-lg hover:text-4xl hover:text-[#558f69]">
      {letter}
    </div>
  ) : (
    <div className="w-2.5 text-4xl h-10 leading-10 cursor-auto border-none">-</div>
  );
}
