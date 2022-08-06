import React, { useContext, useState } from "react";
import Categories from "./WatchData";
import closeLogo from "../images/icon-close.svg";
import logo from "../images/logo192.png";
import logo1 from "../images/icon-cart.svg";
import logo2 from '../images/HikeLogo.jpg'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PAGE_CART = "cart";
const PAGE_PRODUCTS = "Categories";

function MainNav() {
  const [showForm1, setShowForm1] = useState(false);

  const [increase, setIncrease] = useState(0);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [data, setData] = useState(Categories);

  const filterResult = (categItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === categItem;
    });
    setData(result);
  };

  const addToCart = (product) => {
    console.log("cart");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      {data.map((product, idx) => {
        return (
          <>
            <div className="" key={idx}>
              <div className="">
                <img src={product.image} className="w-48" alt="..." />

                <h5 className="">{product.title}</h5>
                <p>Price: {product.price}</p>

                <button className="border-2" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );

  const renderCart = () => (
    <>
      {cart.map((product, idx) => {
        return (
          <>
            <div className="" key={idx}>
              <div className="">
                <img src={product.image} className="w-48" alt="..." />

                <h5 className="">{product.title}</h5>
                <p>Price: {product.price}</p>

                <button
                  className="border-2"
                  onClick={() => removeFromCart(product)}
                >
                  Remove cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );

  const handleClick = () => {
    toast.info("Wow so easy!", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <div
          onClick={() => navigateTo(PAGE_PRODUCTS)}
          className="image ml-16"
          onDoubleClick={() => setData(Categories)}
        >
          {/* <button className=" bg-blue-400 text-base" onClick={() => navigateTo(PAGE_PRODUCTS)}> */}
          <img src={logo2} alt="" className="bg-blue-400 w-12 cursor-pointer" />

          {/* </button> */}
        </div>

        <div className="grid grid-cols-4 gap-10 ">
          <button className="" onClick={() => filterResult("men")}>
            Men
          </button>

          <button className="" onClick={() => filterResult("women")}>
            Women
          </button>
          <button className="" onClick={() => filterResult("children")}>
            Children
          </button>

          {/* <button
                className=""
                onClick={() => setData(Categories)}
              >
                ALL
              </button> */}
        </div>

        <div className="mr-12">
          <button className="mt-0" onClick={() => navigateTo(PAGE_CART)}>
            <img src={logo1} className="" />
          </button>
        </div>
      </div>


      <div>
        {/* <div onClick={() => navigateTo(PAGE_PRODUCTS)} className="image ml-16"> */}
        {/* <button className=" bg-blue-400 text-base" onClick={() => navigateTo(PAGE_PRODUCTS)}> */}
        {/* <img src={logo2} alt="" className="bg-blue-400 w-12 cursor-pointer"  /> */}

        {/* </button> */}
        {/* </div> */}
        {/* <button
        className=" bg-blue-400 text-base"
        onClick={() => navigateTo(PAGE_PRODUCTS)}
      >
        ALL
      </button> */}
      </div>

      {/* <header className="relative bottom-2 ">
       
      </header> */}

      <div className="grid grid-cols-3 gap-4 ml-96 mt-8 ">
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>

      {/* <span className="absolute top-5 right-6 border-2 rounded-lg px-0.5 bg-green-400">{cart.length}</span> */}

      <ToastContainer />
    </>
  );
}

export default MainNav;
