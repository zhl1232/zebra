import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faMusic,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

export default function SoundEffectButton({ soundEffect, getAudio, category }) {
  const dispatch = useDispatch();
  const playing = useSelector((state) => state.playing.value);
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(soundEffect[0])
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const soundEffectButton = (listTopic) => {
    let topicIcon = {};
    if (listTopic === "science") {
      topicIcon = faFlask;
    }
    if (listTopic === "arts") {
      topicIcon = faMusic;
    }
    if (listTopic === "math") {
      topicIcon = faCalculator;
    }
    return topicIcon;
  };

  const setAudioTrack = (factNumber) => {
    setAudio((currentElement) => {
      currentElement = new Audio(soundEffect[factNumber]);
      return currentElement;
    });
  };

  const adjustCounter = () => {
    setFactCounter((currentCount) => {
      let factNumber = currentCount === 1 ? 0 : (currentCount += 1);
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
        <button onClick={() => playAudio()}>
          <div className="text-2xl cursor-pointer text-[#2f4f4f] flex items-center hover:text-[#4d8080]">
            <FontAwesomeIcon
              icon={soundEffectButton(category)}
              onClick={() => {
                adjustCounter();
                playAudio();
              }}
            />
          </div>
        </button>
      ) : (
        <div className="text-2xl cursor-not-allowed text-[#8fbcbc] flex items-center">
          <FontAwesomeIcon icon={soundEffectButton(category)} />
        </div>
      )}
    </>
  );
}
