import React, { useContext, useState } from "react";
import Categories from "./WatchData";
import closeLogo from "../images/icon-close.svg";
import logo from "../images/logo192.png";
import logo1 from "../images/icon-cart.svg";



function MainNavbar() {


  const [showForm1, setShowForm1] = useState(false);



  const [data, setData] = useState(Categories);

  const filterResult = (categItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === categItem;
    });
    setData(result);
  };

  return (
    <>
    
      <div className="border-2 relative ml-16 mt-10 w-72 p-2 cursor-pointer flex justify-between text-base">
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
      </div>

      <h1 className="text-center text-info">Let's Shop</h1>


   

      <div className="grid grid-cols-3 gap-4 ml-96 -mt-12 ">
        {data.map((values) => {
          const { id, title, price, image, content } = values;
          return (
            <>
              <div className="ml-16" key={id}>
                <div className="">
                  <img src={image} className="w-48" alt="..." />

                  <h5 className="">{title}</h5>
                  <p>Price: {price}</p>
                 
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MainNavbar;
