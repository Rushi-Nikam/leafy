import React, { useState, useEffect } from "react";
import PlantCard from "../PlantCard";
import Buttons from "../Buttons";

const Plants = () => {
  const [items, setItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/plants')
      .then((response) => response.json())
      .then((jsonData) => {
        setItems(jsonData);
        setOriginalItems(jsonData); // Store the original data for resetting filters
        setMenuItems([...new Set(jsonData.map((val) => val.category))]);
      })
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

  const filterItems = (cat) => {
    const newItems = originalItems.filter((newval) => newval.category === cat);
    setItems(newItems);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500"
          alt="Plants"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="px-4 py-5 md:px-12 md:py-8">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8">Plants</h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Plants make for the best house companions, suitable for all your moods
          and every aesthetic. Ugaoo brings you the widest variety of plants to
          choose from so you can buy plants online from the comfort of your
          home!
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div id="filter" className="w-full md:w-80">
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
              originalItems={originalItems} // Pass originalItems to Buttons
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

export default Plants;
