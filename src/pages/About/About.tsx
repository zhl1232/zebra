import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { animalFactCitations } from "../../zebrAPI";
import {
  AboutHolder,
  Title,
  Instructions,
  CitationHolder,
  SubTitle,
  SteamHeading,
  AnimalName,
  AnimalFact,
  Links,
} from "./About.styles";

export default function About() {
  const [steamCategories, setSteamCategories] = useState({
    science: { click: false },
    arts: { click: false },
  });
  const [clicked, setClicked] = useState(false);

  function openCitations(id: string) {
    if (id === "science") {
      setSteamCategories({ ...steamCategories, science: { click: !clicked } });
    }
    if (id === "arts") {
      setSteamCategories({ ...steamCategories, arts: { click: !clicked } });
    }
    let showCitation = clicked;
    setClicked(!showCitation);
  }

  function setLinks(object) {
    const linkBlock = Object.entries(object).map(([name, link]) => {
      let linkName = name.split("_").join(" ");
      return (
        <>
          <AnimalName>{linkName}</AnimalName>
          <ul>
            <AnimalFact>
              <a href={link.F1} target="_blank" rel="noopener noreferrer">
                {link.F1}
              </a>
            </AnimalFact>
            <AnimalFact>
              <a href={link.F2} target="_blank" rel="noopener noreferrer">
                {link.F2}
              </a>
            </AnimalFact>
            <AnimalFact>
              <a href={link.F3} target="_blank" rel="noopener noreferrer">
                {link.F3}
              </a>
            </AnimalFact>
          </ul>
        </>
      );
    });
    return linkBlock;
  }

  return (
    <AboutHolder>
      <Title>About</Title>
      <Instructions>
        These are the links we used to create our fun facts:
        <br />
        <span>
          <i>
            NOTE: We've carefully vetted these links to ensure that their page
            content was child-friendly. However, we cannot control the ads or
            links to other pages on these sites. Parental discretion is advised.
          </i>
              <i>
            NOTE: We've carefully vetted these links to ensure that their page
            content was child-friendly. However, we cannot control the ads or
            links to other pages on these sites. Parental discretion is advised.
          </i>
        </span>
      </Instructions>

      <CitationHolder>
        <SubTitle>Citations</SubTitle>
        <SteamHeading onClick={() => openCitations("science")}>
          Science Facts{" "}
          {steamCategories.science.click ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </SteamHeading>
        {steamCategories.science.click && (
          <Links>{setLinks(animalFactCitations)}</Links>
        )}
        <SteamHeading onClick={() => openCitations("arts")}>
          Art Facts{" "}
          {steamCategories.arts.click ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </SteamHeading>
        {steamCategories.arts.click && (
          <div>
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
              <li>link 4</li>
              <li>link 5</li>
              <li>link 6</li>
              <li>link 7</li>
              <li>link 8</li>
              <li>link 9</li>
              <li>link 10</li>
            </ul>
          </div>
        )}
      </CitationHolder>
    </AboutHolder>
  );
}
