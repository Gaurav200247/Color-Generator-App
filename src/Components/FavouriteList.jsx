import React from "react";
import { useGlobalContext } from "../Context";
import SingleFavBlock from "./SingleFavBlock";
import { ImCross } from "react-icons/im";

const FavouriteList = () => {
  const { ShowFav, setShowFav, Favoutites } = useGlobalContext();
  return (
    <div className={`FavModal ${ShowFav && "showFav"}`}>
      <div className="cross-container">
        <ImCross
          className="text-3xl cursor-pointer"
          onClick={() => setShowFav(false)}
        />
      </div>
      <h1 className="text-6xl text-white mb-5 text-center">Favourites</h1>
      {Favoutites.length > 0 ? (
        <div className="fav-colors-container">
          {Favoutites.map((item, index) => {
            return <SingleFavBlock color={item} key={index} />;
          })}
        </div>
      ) : (
        <h1 className="text-4xl my-9 text-red-800">No Items Here!!</h1>
      )}
    </div>
  );
};

export default FavouriteList;
