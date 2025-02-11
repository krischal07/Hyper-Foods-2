import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
function LiquorInfo() {
  const context = useContext(myContext);
  const { mode, product, liquorItems } = context;
  console.log("liquorItems", liquorItems);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart successfully");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [prices, setPrices] = useState([]);
  const [activeOptions, setActiveOptions] = useState([]);
  console.log("activeOptions: ", activeOptions);

  useEffect(() => {
    setPrices(product.map((item) => item.price));
    setActiveOptions(product.map(() => "Room Temperature"));
    console.log("prices are loaded");
  }, [product]);

  const handleOptionClick = (index, option, price) => {
    setActiveOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = option;
      // console.log("updatedOptions", updatedOptions);
      // console.log("option", option);
      return updatedOptions;
    });

    setPrices((prevPrice) => {
      const updatedPrices = [...prevPrice];
      updatedPrices[index] = price;
      // console.log("updatedPrice", updatedPrices);
      // console.log("price", price);
      return updatedPrices;
    });
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Top Rated Liquors
            </h1>
            <div className="h-1 w-20 bg-[#013e72] rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {liquorItems.map((item, index) => {
              const { title, price, imageUrl, actualPrice } = item;

              console.log(item);

              return (
                <div className="p-4 md:w-1/4 drop-shadow-lg" key={index}>
                  <div
                    className="h-full border-2 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                        src={imageUrl}
                        alt={title}
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <div className="">
                        {item.extra_option === "Yes" ? (
                          <div className="flex justify-around space-x-2">
                            <button
                              className={`${
                                activeOptions[index] === "Room Temperature"
                                  ? "btn btn-success mx-1"
                                  : "btn btn-outline btn-success"
                              } px-3 py-1 rounded`}
                              onClick={() =>
                                handleOptionClick(
                                  index,
                                  "Room Temperature",
                                  price
                                )
                              }
                            >
                              Room Temperature
                            </button>
                            <button
                              className={`${
                                activeOptions[index] === "Chilled"
                                  ? "btn btn-primary "
                                  : "btn btn-outline btn-primary"
                              } px-3 py-1 rounded`}
                              onClick={() =>
                                handleOptionClick(
                                  index,
                                  "Chilled",
                                  item.extra_price
                                )
                              }
                            >
                              {item.extra_name}
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {item.category}
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {actualPrice ? (
                        <p
                          className="leading-relaxed mb-3"
                          style={{
                            color: mode === "dark" ? "white" : "",
                            textDecoration: "line-through",
                          }}
                        >
                          Rs. {actualPrice}
                        </p>
                      ) : (
                        <div
                          className="mb-3"
                          style={{
                            height: "1.5em", // Adjust based on the height of the <p> tag
                          }}
                        ></div>
                      )}

                      <p
                        className="leading-relaxed mb-3  text-center font-bold"
                        style={{
                          color: mode === "dark" ? "white" : "",
                          fontSize: 25,
                        }}
                      >
                        Rs. {prices[index]}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-blue-800 hover:bg-emerald-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                          onClick={() => addCart(item)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default LiquorInfo;
