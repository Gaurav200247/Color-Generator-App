import React, { useState, useEffect, useCallback } from "react";
import rgbToHex from "./Utills";
import { useGlobalContext } from "../Context";

const SinglePallete = ({ rgb, type }) => {
  const { AddToFavourites } = useGlobalContext();
  let bcg = rgb.join(",");
  let Hex = rgbToHex(...rgb);
  let url = `https://www.thecolorapi.com/id?rgb=(${bcg})`;

  const [ColorData, setColorData] = useState(null);

  const getdata = useCallback(async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    if (data) {
      setColorData(data);
    }
  }, [url]);

  useEffect(() => {
    getdata();
  }, [url, getdata]);

  const CopyToClipBoard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(`${e.target.innerText} is copied to clipboard`);
  };

  return (
    <div
      style={{ backgroundColor: `${Hex}` }}
      className={`single-pallete w-1/5 h-full  hover:scale-105 ${
        type === "shade" || type === "base"
          ? "text-white hover:border-2 border-white"
          : "text-black hover:border-2 border-black"
      } `}
    >
      <button
        className="add-btn text-3xl h-12 cursor-pointer"
        onClick={(e) => AddToFavourites(e, `rgb(${bcg})`)}
      >
        Add
      </button>

      <div className="color-info-container  flex flex-col justify-around items-center mt-3 ">
        {ColorData && (
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.name.value}
          </span>
        )}
        {ColorData && (
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.hsl.value}
          </span>
        )}
        {ColorData && (
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.hsv.value}
          </span>
        )}
        {ColorData && (
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            rgb({bcg})
          </span>
        )}
        {ColorData && (
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {Hex}
          </span>
        )}
      </div>
    </div>
  );
};

// *******************************************************************************************

const RandomSinglePallete = (item) => {
  const { AddToFavourites } = useGlobalContext();
  let url = `https://www.thecolorapi.com/id?rgb=${item.item}`;

  const [ColorData, setColorData] = useState(null);

  const getdata = useCallback(async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    if (data) {
      setColorData(data);
    }
  }, [url]);

  useEffect(() => {
    getdata();
  }, [url, getdata]);

  const CopyToClipBoard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(`${e.target.innerText} is copied to clipboard`);
  };

  return (
    <div
      style={{ backgroundColor: `${item.item}` }}
      className={`single-pallete w-1/5 h-full  hover:scale-105 text-black hover:border-2 border-white       
       `}
    >
      <button
        className="add-btn text-3xl h-12 cursor-pointer"
        onClick={(e) => AddToFavourites(e, item.item)}
      >
        Add
      </button>

      {ColorData && (
        <div className="color-info-container  flex flex-col justify-around items-center mt-3 ">
          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.name.value}
          </span>

          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.hsl.value}
          </span>

          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.hsv.value}
          </span>

          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {item.item}
          </span>

          <span
            className="singlepallete-links text-sm"
            onClick={CopyToClipBoard}
          >
            {ColorData.hex.value}
          </span>
        </div>
      )}
    </div>
  );
};

export { RandomSinglePallete, SinglePallete };
