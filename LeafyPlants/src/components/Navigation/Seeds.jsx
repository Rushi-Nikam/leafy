import React, { useState } from "react";
import PlantCard from "../PlantCard";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";
import data from "../Data/data";

const Seeds = () => {
  const [items, setItems] = useState(data);
  const menuItems = [...new Set(data.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <>
      <div>
        <span className="py-14 px-12 text-lg text-green-700">
          <Link className="mx-2" to={"/"}>
            Home
          </Link>
          /Seeds
        </span>
        <img src="https://www.ugaoo.com/cdn/shop/collections/Seeds_Banner.jpg?v=1689938338&width=1500://www.uons/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500gaoo.com/cdn/shop/collecti" />
      </div>
      <div className="px-12 py-5 ">
        <h1 className="text-4xl font-semibold mb-8">Seeds</h1>
        <p className="text-gray-600 text-lg">
          With high-yielding varieties of vegetable and fruit seeds, flower
          seeds with high germination rates, and exotic flower bulbs, Ugaoo
          guarantees only the best organic seeds for you and your garden!
          Elevate your home garden with our carefully crafted selection of
          seeds.
        </p>

        <div className="flex gap-16 my-8">
          <div id="filter" className="w-80">
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
          </div>

          <div className="w-full">
            <PlantCard item={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Seeds;
