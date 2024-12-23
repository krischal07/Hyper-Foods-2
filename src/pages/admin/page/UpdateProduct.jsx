import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct } = context;

  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-blue-950 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>

          <div>
            <input
              type="text"
              name="title"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Title"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Price"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="ImageUrl"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Category"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              className=" bg-yellow-500 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-100 outline-none"
              placeholder="Description"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={updateProduct}
              className=" bg-white w-full text-blue-950 font-bold  px-2 py-2 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
