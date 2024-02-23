import React from "react";
import { useSelector } from "react-redux";
import { LetterTile, SyllableTile } from "components";

interface LetterTileHolderProps {
    value: string;
    name: {
      en: {
        text: string;
        audio: string;
      };
      es: {
        text: string;
        audio: string;
      };
    };
    tiles: {
      en: string[][];
      es: string[][];
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
    isSpelled: boolean;
    alphabetLetterSounds: {
      en: Record<string, string>;
      es: Record<string, string>;
    };
};

interface RootState {
  language: {
    value: string;
  }  
}

const LetterTileHolder: React.FC<LetterTileHolderProps> = ({ value, name, tiles, syllables, isSpelled, alphabetLetterSounds }) => {
  const language = useSelector((state: RootState) => state.language.value);
  const newLang = (language === 'en') ? 'en' : 'es';
  return (
    <div
      className="flex justify-center items-center flex-col gap-x-4 w-full"
    >
      {name[newLang].text.length > 10 ? (
        <div>
          {isSpelled ? (
            tiles[newLang].map((tile) => {
              return tile.map((letter, idx) => {
                return (
                  <div 
                    key={idx + letter}
                    className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5"
                  >
                    {letter.split("").map((l, idx) => (
                      <LetterTile
                        key={idx + l}
                        letter={l}
                        letterSound={alphabetLetterSounds[newLang]}
                      />
                    ))}
                  </div>
                );
              });
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={value}
                syllables={syllables}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          {isSpelled ? (
            tiles[newLang].map((tile, idx) => {
              return (
                <div 
                  key={idx.toString() + tile}
                  className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5"
                >
                  {tile.toString().split("").map((t, idx) => (
                    <LetterTile
                      key={idx + t}
                      letter={t}
                      letterSound={alphabetLetterSounds[newLang]}
                    />
                  ))}
                </div>
              );
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={value}
                syllables={syllables}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LetterTileHolder;
