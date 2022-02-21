import React from "react";
import { useGlobalContext } from "../Context";
import { RandomSinglePallete, SinglePallete } from "./SinglePallete";

const PalleteContainer = () => {
  const { ColorList, randarray, RandomShow } = useGlobalContext();
  return (
    <div className="PalleteContainer">
      {RandomShow
        ? randarray.map((item, index) => {
            return <RandomSinglePallete item={item} key={index} />;
          })
        : ColorList.map((item, index) => {
            return <SinglePallete {...item} key={index} />;
          })}
    </div>
  );
};

export default PalleteContainer;
