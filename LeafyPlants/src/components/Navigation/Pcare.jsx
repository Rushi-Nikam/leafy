import React, { useState, useEffect } from "react";
import PlantCard from "../PlantCard";
import Buttons2 from "../Buttons2";

const Pcare = () => {
  const [items, setItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/GardeningTools')
      .then((response) => response.json())
      .then((jsonData) => {
        setItems(jsonData);
        setOriginalItems(jsonData); // Store the original data for resetting filters
        setMenuItems([...new Set(jsonData.map((val) => val.category))]);
      })
      .catch((error) => console.error('Error fetching gardening tools data:', error));
  }, []);

  const filterItems = (cat) => {
    const newItems = originalItems.filter((newval) => newval.category === cat);
    setItems(newItems);
  };

  return (
    <>
      <div className="relative">
        <img 
          src="https://www.ugaoo.com/cdn/shop/collections/Sub_Category_Banners_Plant_Care__Soil___Pott_Med_Desk_91aa0d88-5d77-4d87-8c35-67aa779b4e23.jpg?v=1690444683&width=1500"
          alt="Gardening Tools Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="px-4 sm:px-6 md:px-12 py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8">Gardening Accessories & Tools</h1>
        <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 sm:mb-8">
          Elevate your garden's style and enhance its aesthetics with Leafy's selection of practical and beautiful garden accessories. Explore our exclusive range of garden accessories to effortlessly elevate your outdoor space!
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div id="filter" className="w-full lg:w-80 mb-8 lg:mb-0">
            <Buttons2
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
              originalItems={originalItems}
            />
          </div>

          <div 
            className="w-full overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            <PlantCard item={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pcare;
