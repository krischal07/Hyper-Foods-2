import React from 'react';
import { Link } from 'react-router-dom';

function MenuCard({ title, description, price, image }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center text-gray-800">{title}</h2>
        {/* <p className="text-gray-600 mt-2">{description}</p> */}
        <div className="mt-4 flex justify-center items-center">
       {/* <span className="text-lg font-bold text-green-600">Rs.{price}</span> */}
  <Link to="/allproducts">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
      Order Now
    </button>
  </Link>
</div>

      </div>
    </div>
  );
}

function App() {
  const menuItems = [
    {
      title: "Mughal Restaurant",
      description: "A juicy burger with fresh lettuce, tomatoes, and cheese.",
      price: "8.99",
      image: "./src/assets/menu.png",
    },
    {
      title: "Royal Thakali",
      description: "Cheesy pizza with your favorite toppings and toppings.",
      price: "12.49",
      image: "./src/assets/menu.png",
    },
    {
      title: "Mughal Restaurant",
      description: "A healthy mix of greens, veggies, and dressing.",
      price: "6.99",
      image: "./src/assets/menu.png",
    },
    {
      title: "TRoyal Thakali",
      description: "Rich and creamy pasta made to perfection.",
      price: "10.99",
      image: "./src/assets/menu.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
