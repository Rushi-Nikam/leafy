import React from 'react'
import PlantCard from '../PlantCard'

const POTS_PLANTERS = () => {
  return (
    <>
    <div>
      <img src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500" />
    </div>
    <div className="px-12 py-5">
      <h1 className="text-4xl font-semibold mb-8">Pots & planters</h1>
      <p className="text-gray-600 text-lg">
      Plant pots are the best way to give your plants a safe and happy home, as well as elevate your home decor game. With Ugaoo’s collection of sleek, elegant, and aesthetic pots and planters,  you can give your plants only the best!      </p>

      <div className="flex gap-16 my-8">
        <div id="filter" className="w-80">Filters</div>
        <div id="cards" className="flex-1 grid grid-cols-3 gap-8">
          <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
          <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
          <PlantCard id = "" image = "https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375" title = "Peace Lily Plant" rating = "4.9" price = "299" />
        </div>
      </div>
    </div>
  </>  )
}

export default POTS_PLANTERS