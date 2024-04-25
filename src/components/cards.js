import React from 'react'
import Card from './card';

const Cards = () => {
  return (
    <div className='py-5 px-8'>
        <h1 className='text-3xl mb-5 font-medium'>Your Best Picks</h1>
        <div className='flex items-center justify-between flex-wrap gap-8'>
            <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Plants.jpg?v=1708604254'} title={'Plants'}/>
            <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Seeds.jpg?v=1708604254'} title={'Seeds'}/>
            <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Flowers.jpg?v=1708604253'} title={'Flowering Plants'}/>
            <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Fertilisers.jpg?v=1708604253'} title={'Plant Care'}/>
        </div>
    </div>
  )
}

export default Cards;