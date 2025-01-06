import React, { useContext } from "react";
import { Link } from "react-router-dom";
import menuImage from "../../assets/menu.png";
import restaurant from "../../assets/restaurant.jpg";
import liquor from "../../assets/liquor.png";
import ticket from "../../assets/ticket.png";
import grocery from "../../assets/grocery.jpg";
import foods from "../../assets/foods.png";
import myContext from "../../context/data/myContext";

function MenuCard({ title, description, price, image, link }) {
  return (
    <div className="max-w-sm bg-white rounded-full shadow-lg overflow-hidden">
      <img className="w-full h-60 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          {title}
        </h2>
        {/* <p className="text-gray-600 mt-2">{description}</p> */}
        <div className="mt-4 flex justify-center items-center">
          {/* <span className="text-lg font-bold text-green-600">Rs.{price}</span> */}
          <Link to={link || "/allproducts"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              {title === "Tickets" ? "Book Now" : "Order Now"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { mode } = useContext(myContext);
  const menuItems = [
    {
      title: "Restaurant",
      description: "A juicy burger with fresh lettuce, tomatoes, and cheese.",
      price: "8.99",
      image: restaurant,
    },
    {
      title: "Liquor",
      description: "Cheesy pizza with your favorite toppings and toppings.",
      price: "12.49",
      image: liquor,
      link: "/liqourinfo",
    },
    {
      title: "Tickets",
      description: "Comming soon",
      // price: "10.99",
      image: ticket,
      link: "/tickets",
    },
    {
      title: "Grocery",
      description: "A healthy mix of greens, veggies, and dressing.",
      price: "6.99",
      image: grocery,
    },
    {
      title: "Foods",
      description: "Rich and creamy pasta made to perfection.",
      price: "10.99",
      image: foods,
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100 p-8 "
      style={{
        backgroundColor: mode === "dark" ? "#101c24" : "white",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            mode={mode}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
