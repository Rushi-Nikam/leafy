import React from "react";
import PlantCard from "../PlantCard";

const Plants = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords)
    })
    
  return (
    <>
      <div>
        <img src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500" />
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
          <div id="filter" className="w-80">Filters</div>
          <div id="cards" className="flex-1 grid grid-cols-3 gap-8">
            <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
            <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
            <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plants;
