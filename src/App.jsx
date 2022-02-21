import React from "react";

import NavBar from "./Components/NavBar";
import PalleteContainer from "./Components/PalleteContainer";
import FavouriteList from "./Components/FavouriteList";

const App = () => {
  return (
    <div>
      <NavBar />
      <PalleteContainer />
      <FavouriteList />
    </div>
  );
};

export default App;
