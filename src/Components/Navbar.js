import React, { createContext, useContext, useState } from "react";
// import logo from "../images/logo192.png";
import logo from '../images/HikeLogo.jpg'
import logo1 from '../images/logo.jpg'
import closeLogo from "../images/icon-close.svg";
import Categories from "./WatchData";
// import { LoginContext } from "../Contexts/LoginContext";

function Navbar() {

  const [showForm1, setShowForm1] = useState(false);

  const [increase, setIncrease] = useState(0);


  const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(PAGE_PRODUCTS);

  const [data, setData] = useState(Categories);

 
  const carts = createContext();

  const filterResult = (categItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === categItem;
    });
    setData(result);
  };

  return (
    // <div className="mt-4 flex justify-between items-center px-4">
<>
<div className="bg-black h-12 flex text-white justify-between">
  <img src={logo1} className="w-12 h-9 relative top-1 cursor-pointer ml-16" />
<ul className="flex justify-evenly w-48 relative mt-2 right-10 cursor-pointer justify-evenly ">
  <li>Help</li>
  <li>Join Us</li>
  <li> &nbsp;Sign In</li>
</ul>
</div>


{/* <div className="border-2 relative ml-16 mt-10 w-72 p-2 cursor-pointer flex justify-between text-base">
        PRICE
        {!showForm1 && (
          <button
            className="bg-transparent text-2xl absolute ml-60 -mt-1 "
            onClick={() => setShowForm1(!showForm1)}
          >
            +
          </button>
        )}
        {showForm1 && (
          <button
            className="bg-transparent text-3xl absolute ml-60 -mt-1 "
            onClick={() => setShowForm1(!showForm1)}
          >
            -
          </button>
        )}
        {showForm1 && (
          <div className="relative right-10 mt-6 p-2 ">
            <div className="col-md-3">
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("men")}
              >
                Men
              </button>{" "}
              <br />
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("women")}
              >
                Women
              </button>
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("children")}
              >
                Children
              </button>
              <button
                className="border-2 w-64 mb-4"
                onClick={() => setData(Categories)}
              >
                ALL
              </button>
            </div>
          </div>
        )}
      </div> */}


      {/* <div className=" left relative bottom-1 right-16">
        <ul className="flex flex-row space-x-8 cursor-pointer">
          <li>Watches</li>
          <li>Preminum Watches</li>
          <li>New Arrival</li>
          <li>Smart</li>
        </ul>
      </div>


      <div className="right relative right-28 bottom-1">
        <ul className="flex flex-row space-x-8 ">
          <li>Clocks</li>
          <li>Accessories</li>
          <li>location</li>
          <li>Search</li>
        </ul>
      </div> */}

{/* <div className="border-2 relative ml-16 mt-10 w-72 p-2 cursor-pointer flex justify-between text-base">
        PRICE
        {!showForm1 && (
          <button
            className="bg-transparent text-2xl absolute ml-60 -mt-1 "
            onClick={() => setShowForm1(!showForm1)}
          >
            +
          </button>
        )}
        {showForm1 && (
          <button
            className="bg-transparent text-3xl absolute ml-60 -mt-1 "
            onClick={() => setShowForm1(!showForm1)}
          >
            -
          </button>
        )}
        {showForm1 && (
          <div className="relative right-10 mt-6 p-2 ">
            <div className="col-md-3">
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("men")}
              >
                Men
              </button>{" "}
              <br />
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("women")}
              >
                Women
              </button>
              <button
                className="border-2 w-64 mb-4"
                onClick={() => filterResult("children")}
              >
                Children
              </button>
              <button
                className="border-2 w-64 mb-4"
                onClick={() => setData(Categories)}
              >
                ALL
              </button>
            </div>
          </div>
        )}
      </div> */}


    {/* </div> */}

 
    </>
  );
}

export default Navbar;
