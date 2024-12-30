import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" bg-blue-950 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Title"
              value={products.title || ""}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="acutalPrice"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Actual Price"
              value={products.actualPrice || ""}
              onChange={(e) => {
                setProducts({ ...products, actualPrice: e.target.value });
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Offer Price"
              value={products.price || ""}
              onChange={(e) => {
                const priceValue = parseFloat(e.target.value);
                const actualValue = parseFloat(products.actualPrice);
                if (actualValue <= priceValue) {
                  toast.error("Discount cannot be greater than price!");
                } else {
                  setProducts({ ...products, price: e.target.value });
                }
                // setProducts({ ...products, price: e.target.value })
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="ImageUrl"
              value={products.imageUrl || ""}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
            />
          </div>
          <div>
            <select
              name="category"
              className="bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              value={products.parentCategory || ""}
              onChange={(e) =>
                setProducts({ ...products, parentCategory: e.target.value })
              }
            >
              <option value="" disabled>
                Select a Parent Category
              </option>
              <option value="Liquors">Liquors</option>
              <option value="Grocery">Grocery</option>
              <option value="Food">Food</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="category"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Category"
              value={products.category || ""}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="sub_category"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Sub Category"
              value={products.sub_category || ""}
              onChange={(e) =>
                setProducts({ ...products, sub_category: e.target.value })
              }
            />
          </div>
          <div>
            <select
              name="extra_option"
              className="bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              value={products.extra_option || ""}
              onChange={(e) =>
                setProducts({ ...products, extra_option: e.target.value })
              }
            >
              <option value="" disabled>
                Select if there is extra options
              </option>
              <option value="Yes">Yes</option>
              <option value="Normal Temperature">Normal Temperature</option>
              <option value="No">No</option>
            </select>
          </div>
          {products.extra_option === "Yes" ? (
            <div>
              <div>
                <input
                  type="text"
                  name="extra_name"
                  className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Extra Name"
                  value={products.extra_name || ""}
                  onChange={(e) =>
                    setProducts({ ...products, extra_name: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="extra_price"
                  className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
                  placeholder="Extra Price"
                  value={products.extra_price || ""}
                  onChange={(e) =>
                    setProducts({ ...products, extra_price: e.target.value })
                  }
                />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className=" flex justify-center mb-3">
            <button
              className=" bg-white w-full text-black font-bold  px-2 py-2 rounded-lg"
              onClick={addProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
