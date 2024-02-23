import React from "react";
import { useSelector } from "react-redux";

export default function SyllableTile({ value, syllables }) {
  const language = useSelector((state) => state.language.value);
  const playAudio = (syl) => {
    const syllable = syl.toLowerCase();
    new Audio(syllables[language].audio[syllable.toLowerCase()]).play();
  };


  const last = syllables[language].length - 1;

  return syllables[language].text.map((syllable, idx) => {
    return Array.isArray(syllable) ? (
      syllable.map((syl, idx) => {
        return idx === 0 ? (
          <div key={idx + syl} className="flex flex-row">
            <div
              className="h-12 tracking-wide px-5 drop-shadow-md bg-[#e3dac9] text-4xl border border-[#3d674c] rounded-lg cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
              onClick={() => playAudio(syl)}
            >
              {syl}
            </div>
            <div className="w-2.5 text-4xl h-10 leading-10 cursor-auto border-none">-</div>
          </div>
        ) : (
          <div
            key={idx + syl}
            onClick={() => playAudio(syl)}
            className="h-12 tracking-wide px-5 drop-shadow-md bg-[#e3dac9] text-4xl border border-[#3d674c] rounded-lg cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
          >
            {syl}
          </div>
        );
      })
    ) : idx !== last ? (
      <div key={syllable + idx} className="flex flex-row">
        <div
          className="h-12 tracking-wide px-5 drop-shadow-md bg-[#e3dac9] text-4xl border border-[#3d674c] rounded-lg cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
          onClick={() => playAudio(syllable)}
        >
          {syllable}
        </div>
        <div className="w-2.5 text-4xl h-10 leading-10 cursor-auto border-none">-</div>
      </div>
    ) : (
      <div
        key={idx + syllable}
        onClick={() => playAudio(syllable)}
        className="h-12 tracking-wide px-5 drop-shadow-md bg-[#e3dac9] text-4xl border border-[#3d674c] rounded-lg cursor-pointer hover:border-[#0e6e79] hover:text-[#0e6e79]"
      >
        {syllable}
      </div>
    );
  });
}
