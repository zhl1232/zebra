import React, { useState } from "react";
import { useSelector } from "react-redux";
import {  Name, Icon, IconDisabled } from "./NameButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faMusic,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

export default function NameButton({ name, category, nameSound }) {
    const language = useSelector((state) => state.language.value);
  const playing = useSelector((state) => state.playing.value);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(nameSound)
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const playAudio = () => {
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    return audio.play();
  };

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

  return (
      <Name onClick={playAudio}> 
        {name.length > 10 ? (
          <div className="name">{name}</div>
        ) : (
          <div>{name}</div>
        )}
      </Name>
  );
}
