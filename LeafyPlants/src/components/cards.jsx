import React from 'react'
import Card from './card';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='py-5 px-8'>
        <h1 className='text-3xl mb-5 font-medium'>Visit Our </h1>
        <div className='flex items-center justify-between flex-wrap gap-8'>
          <Link to={'/collections/plants'}> <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Plants.jpg?v=1708604254'} title={'Plants'}/></Link> 
          <Link to={'/collections/seeds'}><Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Seeds.jpg?v=1708604254'} title={'Seeds'}/></Link>  
          <Link to={'/collections/GTools'}><Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Flowers.jpg?v=1708604253'} title={'Plant Care'}/></Link>  
            <Card image_url={'https://www.ugaoo.com/cdn/shop/files/Spring_Best_Picks_Tiles-Fertilisers.jpg?v=1708604253'} title={'Plant Care'}/>
        </div>
    </div>
  )
}

export default Cards;