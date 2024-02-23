import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobileBars from "../../images/icons/bars-solid.svg";

const NavBar = ({ handleModal }) => {
  return (
    <div className="bg-[#ff6347] w-full h-24 flex justify-center drop-shadow-xl">
      <div className="flex flex-row items-center justify-between w-11/12">
            {/* MENU ICON - NEEDS WORK!!! */}
            <div className="flex w-8 h-8 items-center justify-around">
              <img
                src={mobileBars}
                alt="mobile menu"
                className="h-6 leading-6 cursor-pointer hover:text-[#343434]"
                onClick={() => handleModal()}
              />
            </div>
            <Link to="/" className="text-decoration-line: none">
              <h1
                className="heading"
                style={{
                  fontSize: "2.5rem",
                  color: "#3c3f4a",
                  transform: "skew(-5deg, -5deg) rotate(5deg)",
                  WebkitTransform: "skew(-5deg, -5deg) rotate(5deg)",
                  WebkitTransformOrigin: "center center",
                  transformOrigin: "center center",
                  textShadow:
                    "-1px 1px #E1DFDB, -2px 2px #E1DFDB, -3px 3px #120600, -4px 4px #120600, -5px 5px #E1DFDB, -6px 6px #E1DFDB, -7px 7px #120600, -8px 8px #120600, -9px 9px #E1DFDB, -10px 10px #E1DFDB, -11px 11px 15px rgba(0, 0, 0, 0.5)",
                }}
              >
                Zebra
              </h1>
            </Link>
        </div>
    </div>
  );
};

export default NavBar;
