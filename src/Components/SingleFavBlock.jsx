import React, { useCallback, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGlobalContext } from "../Context";

const SingleFavBlock = ({ color }) => {
  const { RemoveFromFavourites } = useGlobalContext();
  let url = `https://www.thecolorapi.com/id?rgb=${color}`;

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
    <div className="SingleFavBlock" style={{ backgroundColor: `${color}` }}>
      {ColorData && (
        <div className="info-container flex flex-col">
          <span
            className="fav-block-links mb-1 cursor-pointer"
            onClick={CopyToClipBoard}
          >
            {ColorData.name.value}
          </span>
          <span
            className="fav-block-links mb-1 cursor-pointer"
            onClick={CopyToClipBoard}
          >
            {ColorData.hex.value}
          </span>
          <span
            className="fav-block-links mb-1 cursor-pointer"
            onClick={CopyToClipBoard}
          >
            {ColorData.rgb.value}
          </span>
        </div>
      )}
      <RiDeleteBin6Line
        className="delete-btn"
        onClick={() => RemoveFromFavourites(color)}
      />
    </div>
  );
};

export default SingleFavBlock;
