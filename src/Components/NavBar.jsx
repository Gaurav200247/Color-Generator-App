import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Values from "values.js";
import { useGlobalContext } from "../Context";

const navShadow = {
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
};

const NavBar = () => {
  const {
    color,
    setcolor,
    setColorList,
    num,
    PreColor,
    setPreColor,
    IsError,
    setIsError,
    setrandarray,
    setRandomShow,
    setShowFav,
  } = useGlobalContext();

  const GenerateRandomPallete = () => {
    setRandomShow(false);

    let randArray = [1, 2, 3];
    for (let index = 0; index < 3; index++) {
      randArray[index] = Math.floor(Math.random() * 255).toString();
    }
    setPreColor({
      ...PreColor,
      r: randArray[0],
      g: randArray[1],
      b: randArray[2],
    });

    try {
      let getcolor = new Values(
        `rgb(${PreColor.r}, ${PreColor.g}, ${PreColor.b})`
      ).all(num);
      setColorList(getcolor);
      // console.log(getcolor);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const GenerateRandomColors = () => {
    setRandomShow(true);
    let randomNumber = [];
    let element;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        randomNumber[j] = Math.floor(Math.random() * 255).toString();
        element = randomNumber.join();
      }
      arr[i] = element;
    }
    const newarr = arr.map((item) => {
      return `rgb(${item})`;
    });
    setrandarray(newarr);
  };

  const HandleSubmit = (e) => {
    setRandomShow(false);
    e.preventDefault();
    try {
      let getcolor = new Values(color).all(num);
      setColorList(getcolor);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    let t = setInterval(() => {
      setIsError(false);
    }, 3000);
    return () => {
      clearInterval(t);
    };
  }, [IsError, setIsError]);

  return (
    <nav
      className="flex w-full justify-around items-center p-3 bg-indigo-700"
      style={navShadow}
    >
      {/* --------------------------------------- */}
      {/* --------------------------------------- */}
      <div className="logo-container w-1/4 cursor-pointer text-center">
        <h1
          className="logo font-mono text-3xl text-white hover:text-cyan-300 transition duration-500"
          onClick={() => window.location.reload()}
        >
          Color Generator
        </h1>
      </div>
      {/* --------------------------------------- */}
      {/* --------------------------------------- */}
      <div className="form-container  flex flex-col justify-center items-center w-1/5 p-1">
        <form
          onSubmit={HandleSubmit}
          className="bg-white  px-5 py-2 w-full"
          style={navShadow}
        >
          <div className="form-section w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="#f15025"
              className="border-transparent focus:outline-none w-4/5  "
              value={color}
              onChange={(e) => setcolor(e.target.value)}
            />
            <button
              type="submit"
              className="w-1/5 flex justify-end border-transparent"
            >
              <BiSearch className="bg-transparent text-xl -mb-1 " />
            </button>
          </div>
        </form>
        {IsError && (
          <div className="search-alert text-center text-red-600 whitespace-nowrap mt-1 w-full overflow-hidden">
            Incorrect Code !!
          </div>
        )}
      </div>
      {/* --------------------------------------- */}
      <div
        className="show-Favourites-Container w-1/12 text-white flex flex-col cursor-pointer justify-center items-center  transition duration-500 hover:text-cyan-300"
        onClick={() => setShowFav(true)}
      >
        <AiFillStar />
        <span className="whitespace-nowrap">Show Favourites</span>
      </div>
      {/* --------------------------------------- */}
      {/* --------------------------------------- */}
      <div className="random-btn-container w-1/6">
        <button
          className="random-btn text-white flex flex-col  justify-center items-center w-full transition duration-500 hover:text-cyan-300 "
          onClick={GenerateRandomPallete}
        >
          <FaRandom />
          Generate Random Pallete
        </button>
      </div>{" "}
      {/* --------------------------------------- */}
      {/* --------------------------------------- */}
      <div className="random-btn-container w-1/6">
        <button
          className="random-btn text-white flex flex-col  justify-center items-center w-full transition duration-500 hover:text-cyan-300 "
          onClick={GenerateRandomColors}
        >
          <FaRandom />
          Generate Random Colours
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
