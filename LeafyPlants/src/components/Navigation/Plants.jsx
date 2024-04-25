import React, { useState } from "react";
import PlantCard from "../PlantCard";
import Buttons from "../Buttons";
import data from "../Data/data";
// import axios from "axios";

const Plants = () => {
  const [items, setItems] = useState(data);
  const menuItems = [...new Set(data.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };

  // useEffect(() => {
  //   axios.get('/getplants', (result) => {
  //     setItems(result.data);
  //   })

  // }, [])

  return (
    <>
      <div>
        <img
          src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500"
          alt="Indoor Plants"
        />
      </div>
      <div className="px-12 py-5">
        <h1 className="text-4xl font-semibold mb-8">Plants</h1>
        <p className="text-gray-600 text-lg">
          Plants make for the best house companions, suitable for all your moods
          and every aesthetic. Ugaoo brings you the widest variety of plants to
          choose from so you can buy plants online from the comfort of your
          home!
        </p>

        <div className="flex gap-16 my-8">
          <div id="filter" className="w-80">
            <Buttons
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
          </div>

          <div
            className="w-full overflow-y-auto "
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            {/* {items?.map((item) => ( */}
            {/* ))} */}
              <PlantCard item={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plants;
