import React from 'react'
import PlantCard from '../PlantCard'

const Seeds = () => {
  return (
    <>
    <div>
    <img src="https://www.ugaoo.com/cdn/shop/collections/Seeds_Banner.jpg?v=1689938338&width=1500://www.uons/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500gaoo.com/cdn/shop/collecti" />
  </div>
  <div className="px-12 py-5">
    <h1 className="text-4xl font-semibold mb-8">Seeds</h1>
    <p className="text-gray-600 text-lg">
    With high-yielding varieties of vegetable and fruit seeds, flower seeds with high germination rates, and exotic flower bulbs, Ugaoo guarantees only the best organic seeds for you and your garden! Elevate your home garden with our carefully crafted selection of seeds. 


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
  )
}

export default Seeds