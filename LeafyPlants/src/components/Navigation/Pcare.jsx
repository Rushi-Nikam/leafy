import React,{useState} from "react";
import PlantCard from "../PlantCard";

import data2 from "../Data/data2";
import Buttons2 from "../Buttons2";

const Pcare = () => {
  const [items, setItems] = useState(data2);
  const menuItems = [...new Set(data2.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = data2.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords)
    })
    
  return (
    <>
      <div>
        <img src="https://www.ugaoo.com/cdn/shop/collections/Sub_Category_Banners_Plant_Care__Soil___Pott_Med_Desk_91aa0d88-5d77-4d87-8c35-67aa779b4e23.jpg?v=1690444683&width=1500" />
      </div>
      <div className="px-12 py-5">
        <h1 className="text-4xl font-semibold mb-8">Gardening Accessories & Tools</h1>
        <p className="text-gray-600 text-lg">
        Elevate your garden's style and enhance its aesthetics with Leafy's selection of practical and beautiful garden accessories. Explore our exclusive range of garden accessories to effortlessly elevate your outdoor space!
        </p>
        <div className="flex gap-16 my-8">
          <div id="filter" className="w-80">
            <Buttons2
              menuItems={menuItems}
              filterItems={filterItems}
              setItems={setItems}
            />
          </div>
         
        <div className="w-full overflow-y-auto "
            style={{ maxHeight: "calc(100vh - 200px)" }}>
          
            <PlantCard item={items}/>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Pcare;
