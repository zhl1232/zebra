import React from "react";
import { zipWith } from 'lodash-es';
import { dotOrganizer } from "../../utils/utils.js";
import { TenFrame } from "components";
import {
  DotPicture,
  UnitGroups,
  UnitHolder,
  UnitImage,
} from "./FactorUnitAnimations.styles.ts";

export default function FactorUnitAnimations({ unitNumber, value, image }) {
  // const cups = Array.apply(null, Array(unitNumber / value)).map(function () {});

  // const dotArray = dotOrganizer(value);

  // const dots = dotArray.map((dot) => {
  //   return Array.apply(null, Array(dot)).map(function () {});
  // });

  function unitAmount() {
    let frames = 0;
    if (unitNumber <= 10) {
      frames = 1;
    }
    if (unitNumber > 10 && unitNumber <= 20) {
      frames = 2;
    }
    if (unitNumber > 20 && unitNumber <= 30) {
      frames = 3;
    }
    return frames;
  }

  function getDotAmount() {
    let dots = [];
    let frame2 = unitNumber - 10;
    let frame3 = unitNumber - 20
    if (unitNumber <= 10) {
      dots.push(unitNumber);
    }
    if (unitNumber > 10 && unitNumber <= 20) {
      dots.push(10, frame2);
    }
    if (unitNumber > 20 && unitNumber <= 30) {
      dots.push(10, 10, frame3);
    }
    return dots;
  }

  const dotUnits = getDotAmount();

  const frameQuantity = unitAmount();

  const frames = Array.apply(null, Array(frameQuantity)).map(function () {});

  return (
    <DotPicture className="h-134">

    {/* This maps through two arrays and provides a frame and dot amount */}
    {/* based on the unitAmount, dynamically */}
    {zipWith(frames, dotUnits, (frame, dotUnit) => {
        return <TenFrame key={unitNumber} dotAmount={dotUnit} />
      })
    }

      {/* {cups.map((el, index) => {
        return (
          <UnitGroups key={index}>
            {
              dots.map((dot, index) => {
                return (
                  <UnitHolder key={index}>
                    {dot.map((d) => {
                      return <UnitImage key={d} src={image} unit={unitNumber} size={unitSize()} />;
                    })}
                  </UnitHolder>
                );
              })
            }
          </UnitGroups>
        )
      })} */}
    </DotPicture>
  );
}
