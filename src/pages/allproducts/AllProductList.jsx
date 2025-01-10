import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";

// import { addToCart } from "../../redux/CartSlice";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function AllProducts() {
  const context = useContext(myContext);
  const { mode, product } = context;

  console.log("product", product);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userid = user?.uid;
  console.log("userid", userid);

  const addCart = (product) => {
    if (!userid) {
      navigate("/login");
    } else {
      dispatch(addToCart(product));
      toast.success("Added to cart successfully");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [prices, setPrices] = useState([]);

  const [activeOptions, setActiveOptions] = useState([]);
  console.log("activeOptions: ", activeOptions);

  const [filteredProducts, setFilteredProducts] = useState(product); // State for filtered products

  const [filter, setFilter] = useState("default");

  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Filter products based on the selected filter
    let filtered;
    if (filter === "liquor") {
      filtered = product.filter((item) => item.parentCategory === "Liquors");
    } else if (filter === "food") {
      filtered = product.filter((item) => item.parentCategory === "Food");
    } else if (filter === "grocery") {
      filtered = product.filter((item) => item.parentCategory === "Grocery");
    } else {
      filtered = product; // Default shows all products
    }
    if (searchQuery) {
      filtered = filtered.filter((item) => {
        // Check if sub_category exists and matches search query
        const subCategoryMatch =
          item.sub_category &&
          item.sub_category.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if category matches search query (fallback if sub_category is missing)
        const categoryMatch =
          item.category &&
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

        const titleMatch =
          item.title &&
          item.title.toLowerCase().includes(searchQuery.toLowerCase());

        // If either sub_category or category matches the search query, include the item
        return subCategoryMatch || categoryMatch || titleMatch;
      });
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filter, searchQuery, product]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredProducts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(product.length / postPerPage);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterFromUrl = queryParams.get("filter");
    if (filterFromUrl) {
      setFilter(filterFromUrl);
    }
  }, [location]);

  useEffect(() => {
    const updatedPrices = filteredProducts.map((item, index) => {
      const activeOption = activeOptions[index] || "Room Temperature";
      return activeOption === "Chilled" && item.extra_price
        ? item.extra_price
        : item.price;
    });
    setPrices(updatedPrices);
  }, [filteredProducts, activeOptions]);

  const handleOptionClick = (index, option, price) => {
    setActiveOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = option;
      return updatedOptions;
    });

    setPrices((prevPrice) => {
      const updatedPrices = [...prevPrice];
      updatedPrices[index] = price;

      return updatedPrices;
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Top Rateds Foods
          </h1>
          <div className="h-1 w-20 bg-[#013e72] rounded"></div>
        </div>

        <div className=" flex justify-between">
          {/* Filter Buttons */}
          <div className="mb-6">
            <button
              className={`btn mx-2 ${
                filter === "default"
                  ? "btn btn-success text-white"
                  : "btn-outline btn-success"
              }`}
              onClick={() => setFilter("default")}
            >
              Show All
            </button>
            <button
              className={`btn mx-2 ${
                filter === "liquor"
                  ? "btn btn-success text-white"
                  : "btn-outline btn-success"
              }`}
              onClick={() => setFilter("liquor")}
            >
              Liquor
            </button>
            <button
              className={`btn mx-2 ${
                filter === "food"
                  ? "btn btn-success text-white"
                  : "btn-outline btn-success"
              }`}
              onClick={() => setFilter("food")}
            >
              Food
            </button>
            <button
              className={`btn mx-2 ${
                filter === "grocery"
                  ? "btn btn-success text-white"
                  : "btn-outline btn-success"
              }`}
              onClick={() => setFilter("grocery")}
            >
              Grocery
            </button>
          </div>
          <div className="flex space-x-2 ">
            <div className="relative w-64">
              {/* Search icon inside the input field */}
              <FaSearch className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search for a product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`input input-bordered input-success w-full pl-10 pr-3 py-2 transition-colors ${
                  mode === "dark"
                    ? searchQuery
                      ? "border-white bg-gray-800 text-white"
                      : "border-gray-700 bg-gray-900 text-white"
                    : searchQuery
                    ? "border-black bg-white"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {currentPost.map((item, index) => {
            const { title, price, imageUrl, actualPrice } = item;

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
                        <div className="flex justify-around mb-4">
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
                                ? "btn btn-info "
                                : "btn btn-outline btn-info"
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
                    <div className="border-2 flex justify-center mb-4">
                      {item.extra_name ? (
                        ""
                      ) : (
                        <button className="btn  px-3 py-1 rounded w-full "></button>
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
                      className="leading-relaxed mb-3 text-center font-bold"
                      style={{
                        color: mode === "dark" ? "white" : "",
                        fontSize: 25,
                      }}
                    >
                      Rs. {prices[index]}
                    </p>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-blue-800 hover:bg-emerald-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2 "
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

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-3 py-1 mx-1 my-2 rounded ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
}
export default AllProducts;
