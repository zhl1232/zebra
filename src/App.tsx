import { useRef, useState } from 'react';
import {
  scienceArray,
  artsArray,
  mathArray,
  // animalSyllables,
  alphabetLetterSounds
} from './zebrAPI';
import { NavBar, MenuModal, Footer } from 'components/index';
import { Outlet } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage.ts';
import './styles.css';

export default function App() {
  const menuModal = useRef();
  // SCIENCE
  const [animals, setAnimals] = useLocalStorage('animals', scienceArray);

  // ARTS
  const [instruments, setInstruments] = useLocalStorage(
    'instruments',
    artsArray
  );

  // MATH
  const [numbers, setNumbers] = useLocalStorage('numbers', mathArray);

  const [detailOpen, setDetailOpen] = useState(false);
  const [loading] = useState(false);

  /* 
      handleClose toggles the view from the ButtonList
      to the LetterDetail
  */

  const handleOpenClose = (id, category, audio = new Audio()) => {
    let list = [];
    if (category === 'science') list = animals;
    if (category === 'math') list = numbers;
    if (category === 'arts') list = instruments;

    const newList = list.map((element) => {
      if (id === element.id) {
        element.clicked = !element.clicked;
      }
      return element;
    });

    if (category === 'science') {
      setAnimals(newList);
    }
    if (category === 'arts') {
      setInstruments(newList);
    }
    if (category === 'math') {
      setNumbers(newList);
    }

    const clicked = detailOpen;
    setDetailOpen(!clicked);
    return (audio.volume = 0);
  };

  const handleModal = () => {
    menuModal.current.showModal();
  };

  const handleLike = (id, category, list) => {
    let array = [];
    if (category === 'science') {
      array = [...animals];
    }
    if (category === 'arts') {
      array = [...instruments];
    }
    if (category === 'math') {
      array = [...numbers];
    }

    const newList = array.map((buttonValue) => {
      if (id === buttonValue.id) {
        buttonValue.isLiked =
          String(buttonValue.isLiked) === 'true' ? false : true;
      }
      return buttonValue;
    });

    if (category === 'science') {
      setAnimals(newList);
    }
    if (category === 'arts') {
      setInstruments(newList);
    }
    if (category === 'math') {
      setNumbers(newList);
    }
  };

  //////////////////////////////////////////
  ///////// PARENT FUNCTIONS - END /////////
  //////////////////////////////////////////

  return (
    <div className='min-w-screen bg-[#F3F3E9] min-h-screen'>
      {loading && <div>Loading</div>}
      {
        // hasAnimal  &&
        <div className='flex flex-col justify-between items-center w-full h-screen'>
          <NavBar handleModal={handleModal} />
          <MenuModal menuModal={menuModal} />
          <Outlet
            context={{
              instruments,
              animals,
              numbers,
              alphabetLetterSounds,
              detailOpen,
              handleOpenClose,
              handleLike
            }}
          />
          <Footer />
        </div>
      }
    </div>
  );
}
