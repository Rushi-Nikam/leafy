import React from "react";
import data from "./Data/data";

const Buttons = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className="font-serif w-full">
      <h1 className="text-2xl">Filter</h1>
      {menuItems.map((val, index) => (
        <div key={index} className="flex w-52 my-4 text-lg justify-between">
          <button
            className="flex flex-col underline underline-offset-2"
            onClick={() => filterItems(val)}
          >
            {val}
          </button>
          <div>+</div>
        </div>
      ))}
      <br />
      <button
        className="flex flex-col underline underline-offset-2"
        onClick={() => setItems(data)}
      >
        ALL
      </button>
    </div>
  );
};

export default Buttons;
