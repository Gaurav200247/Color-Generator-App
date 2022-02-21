import React, { useContext, useEffect, useState } from "react";
import Values from "values.js";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("FavList");

  if (list) {
    return JSON.parse(localStorage.getItem("FavList"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const num = 36;
  const [PreColor, setPreColor] = useState({ r: "64", g: "132", b: "248" });
  const [color, setcolor] = useState("");
  const [ColorList, setColorList] = useState(
    new Values(`rgb(${PreColor.r}, ${PreColor.g}, ${PreColor.b})`).all(num)
  );
  const [IsError, setIsError] = useState(false);
  const [randarray, setrandarray] = useState([]);
  const [RandomShow, setRandomShow] = useState(false);
  const [Favoutites, setFavoutites] = useState(getLocalStorage);

  const [Text, setText] = useState("Add to Favourites");
  const [change, setchange] = useState(false);

  const [ShowFav, setShowFav] = useState(false);

  const AddToFavourites = (e, color) => {
    setFavoutites([...Favoutites, color]);
    console.log("item added");
    alert(`${color} Added to Favourites`);
  };

  const RemoveFromFavourites = (color) => {
    let newFav = Favoutites.filter((item) => {
      return item !== color;
    });
    setFavoutites(newFav);
    console.log("item removed");
  };

  useEffect(() => {
    localStorage.setItem("FavList", JSON.stringify(Favoutites));
  }, [Favoutites]);

  // localStorage.clear();
  return (
    <AppContext.Provider
      value={{
        ColorList,
        setColorList,
        color,
        setcolor,
        num,
        PreColor,
        setPreColor,
        IsError,
        setIsError,
        randarray,
        setrandarray,
        RandomShow,
        setRandomShow,
        Favoutites,
        setFavoutites,
        AddToFavourites,
        RemoveFromFavourites,
        Text,
        setText,
        change,
        setchange,
        ShowFav,
        setShowFav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
