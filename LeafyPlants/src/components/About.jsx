import React from "react";
import { Link } from "react-router-dom";

import bank from "../../public/mainimg/data.jpg";
import main from "../../public/mainimg/maintag.png";
import man from '../../public/mainimg/man.jpg'

const About = () => {
  return (
    <>
      
   
      <div className="flex  my-10  ">
        <img src={main} alt="" />
      </div>

      <div className="mx-10  w-11/12 items-center  flex px-10  justify-center  my-10  ">
        <img className="w-11/12" src={bank} alt="img" />
        <div className="px-20 w-11/12">
          <h1 className="font-bold  text-4xl flex items-center  font-serif">
            Why we started LeafyPlant
          </h1>
          <p className="my-4 font-serif">
            "Welcome to LeafyPlants, your premier destination for top-quality
            greenery delivered right to your doorstep in Pune, Mumbai, Satara,
            and Thane! Established in January 2024, LeafyPlants is dedicated to
            bringing the beauty of nature to urban spaces across Maharashtra.
            <p className="my-4  font-serif">
              Our platform connects you with a curated selection of exquisite
              plants sourced directly from trusted nurseries, ensuring freshness
              and quality with every order. Whether you're looking to brighten
              up your home, office, or outdoor space, LeafyPlants has the
              perfect green companion for you.
            </p>
            <p className="my-4  font-serif">
              With our hassle-free delivery service, you can enjoy the
              convenience of having lush greenery delivered straight to your
              door in Pune, Mumbai, Satara, and Thane. Join us in enhancing your
              living space with the vibrant energy of plants. Explore our
              collection today and let LeafyPlants transform your surroundings!"
            </p>
          </p>
        </div>
      </div>
      <div className="mx-10  w-11/12 items-center  flex px-10  justify-center  my-10  ">
        <div className="px-20 w-11/12">
          <h1 className="font-bold  text-4xl flex items-center  font-serif">
           What we do
          </h1>
          <p className="my-4 font-serif flex justify-center">
            LeafyPlants is all about making plant care simple. We search far and
            wide for the best plants, carefully chosen from trusted places, and
            deliver them right to your door. But we don't stop there. We also
            share tips and advice on how to keep your plants healthy and happy.
            So, whether you're a total beginner or a seasoned green thumb,
            LeafyPlants is here to make your plant journey enjoyable and
            stress-free.
          </p>
        </div>
        <img className="w-11/12" src={man} alt="img" />
      </div>
    </>
  );
};

export default About;
