import React, { useEffect, useState } from "react";

export default function TenFrame({ dotAmount }) {
  const [dots, setDots] = useState({
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
  });

  // provides the right amount of dots for each ten frame
  while (dotAmount >= 0) {
    dots[`f${dotAmount}`] = true;
    dotAmount--;
  }

  return (
    <div className="flex flex-col w-10/12 lg:w-full">
      <div className="flex w-full flex-row justify-center items-center">
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f1 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f2 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f3 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0 border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f4 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-b-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f5 ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center items-center">
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f6 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f7 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f8 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black border-r-0">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f9 ? "block" : "hidden"
            }`}
          ></div>
        </div>
        <div className="flex justify-center items-center aspect-square w-1/5 border-4 border-solid border-black">
          <div
            className={`bg-red-500 w-10 h-10 rounded-full ${
              dots.f10 ? "block" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
