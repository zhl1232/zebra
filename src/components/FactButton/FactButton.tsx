import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

interface FactButtonProps {
  funFacts: {
    en: string[];
    es: string[];
  };
  syllables: {
    en: {
      text: string[];
      audio: Record<string, string>;
    };
    es: {
      text: string[];
      audio: Record<string, string>;
    };
  };
  getAudio: (arg0: HTMLAudioElement) => void;
}

interface RootState {
  playing: {
    value: string;
  }  
  language: {
    value: string;
  }
}

const FactButton: React.FC<FactButtonProps> = ({ funFacts, getAudio }) => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);
  const newLang = (language !== 'en') ? 'en' : 'es';
  const playing = useSelector((state: RootState) => state.playing.value);
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement>(
    // typeof Audio !== "undefined" && new Audio(funFacts[0])
    new Audio(funFacts[newLang][0])
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const setAudioTrack = (factNumber: number) => {
    setAudio((currentElement) => {
      currentElement = new Audio(funFacts[newLang][factNumber]);
      return currentElement;
    });
  };

  const adjustCounter = () => {
    setFactCounter((currentCount) => {
      let factNumber = currentCount >= 2 ? 0 : (currentCount += 1);
      setAudioTrack(factNumber);
      return factNumber;
    });
  };

  const playAudio = () => {
    dispatch(change(false));
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    getAudio(audio);
    return audio.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(change(true));
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration, dispatch]);

  return (
    <>
      {playing ? (
        <div className="text-3xl cursor-pointer text-[#2f4f4f] flex items-center hover:text-[#FC6A03]">
          <FontAwesomeIcon
            icon={faLightbulb}
            onClick={() => {
              adjustCounter();
              playAudio();
            }}
          />
        </div>
      ) : (
        <div className="text-3xl cursor-not-allowed text-[#8fbcbc] flex items-center">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
      )}
    </>
  );
};

export default FactButton;