import React from 'react'

const Services = () => {
    const data = [
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "Bestsellers"
        },
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "Easy to Care"
        },
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "XL Plants"
        },
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "Ceramic Pots"
        },
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "Vegetable Seeds"
        },
        {
            image: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg",
            title: "Fertilisers"
        },
    ]
  return (
    <div className='py-8 px-16 flex items-center justify-between flex-wrap gap-2'>
        {data?.map((val, i) => (
            <div key={i} className='text-center space-y-3'>
                <div className='outline outline-[#e3b4d5] outline-offset-4 rounded-full overflow-hidden w-[128px] h-[128px]'>
                    <img src = {val.image} alt = {val.title} className='w-full h-full object-cover'/>
                </div>
                <h1 className='text-xl'>{val.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Services;