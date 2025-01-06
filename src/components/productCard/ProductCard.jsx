import React, { useContext } from "react";
import { Link } from "react-router-dom";
import menuImage from "../../assets/menu.png";
import restaurant from "../../assets/restaurant.jpg";
import liquor from "../../assets/liquor.png";
import ticket from "../../assets/ticket.png";
import grocery from "../../assets/grocery.jpg";
import foods from "../../assets/foods.png";
import myContext from "../../context/data/myContext";

function MenuCard({ title, description, price, image, link, filter }) {
  return (
    <div className="max-w-sm  w-64 h-64 bg-white rounded-full shadow-2xl overflow-hidden">
      <Link to={`/allproducts?filter=${filter}`}>
        <img className="w-full h-full object-cover" src={image} alt={title} />
        {title === "Tickets"}

        <div className="p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

function App() {
  const { mode } = useContext(myContext);
  const menuItems = [
    // {
    //   title: "Restaurant",
    //   description: "A juicy burger with fresh lettuce, tomatoes, and cheese.",
    //   price: "8.99",
    //   image: restaurant,
    // },
    {
      title: "Liquor",
      description: "Cheesy pizza with your favorite toppings and toppings.",
      price: "12.49",
      image: liquor,
      filter: "liquor",
    },
    {
      title: "Tickets",
      description: "Comming soon",
      // price: "10.99",
      image: ticket,
      link: "/tickets",
      // filter: "tickets",
    },
    {
      title: "Grocery",
      description: "A healthy mix of greens, veggies, and dressing.",
      price: "6.99",
      image: grocery,
      filter: "grocery",
    },
    {
      title: "Foods",
      description: "Rich and creamy pasta made to perfection.",
      price: "10.99",
      image: foods,
      filter: "food",
    },
  ];

  return (
    <div
      className="min-h-24 bg-gray-100 p-8 "
      style={{
        backgroundColor: mode === "dark" ? "#101c24" : "white",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            mode={mode}
            link={item.link}
            filter={item.filter}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
