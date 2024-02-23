import React, { useState } from "react";
import {
  ShowContainer,
  SlideHolder,
  Slide,
  Fact,
  CloseIcon,
} from "./SlideShow.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function SlideShow({ xSectionCloser, item }) {
  const [slide, setSlide] = useState(0);

  const slideContent = [
    <Fact>
      <div>
        Place of Origin: {item.slides[0].placeOfOrigin}
      </div>
      <div className="flex justify-center">
        <img className="w-1/2" src={item.slides[0].flag} alt={item.slides[0].placeOfOrigin} />
      </div>
      <div>
        <b>How's it work?</b> {item.slides[0].howItWorks}
      </div>
    </Fact>,
    <Fact>
      <div>
        Instrument Type: {item.slides[1].instrumentType}
      </div>
      <div>
        Technical Name: {item.slides[1].technicalName}
      </div>
      <div className="text-center">
        Made of Material: {item.slides[1].material}
      </div>
    </Fact>,
    <Fact>
      <iframe width="250" src={item.slides[2].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
    </Fact>
  ];

  const decrementFact = () => {
    setSlide((prevFact) => prevFact - 1);
    slide <= 0 && setSlide(2);
  };

  const incrementFact = () => {
    setSlide((prevFact) => prevFact + 1);
    slide >= 2 && setSlide(0);
  };

  return (
    <ShowContainer>
      <SlideHolder>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleLeft}
          onClick={() => decrementFact()}
        />
        <div className="flex flex-col h-fit">
          {slideContent[slide]}
        </div>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleRight}
          onClick={() => incrementFact()}
        />
      </SlideHolder>
      <CloseIcon onClick={() => xSectionCloser()}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </CloseIcon>
    </ShowContainer>
  );
}
